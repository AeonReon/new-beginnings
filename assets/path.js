// The Path — the one continuous 52-week rhythm a family is on.
//
// Why this exists: the app is a buffet of traditions on purpose, and that stays.
// But a buffet gives a parent no thread to hold. The feast weeks are not a
// tradition — they're universal culture on a seasonal rhythm — so every family
// can be on the same week regardless of which approach they lean toward.
// "You're on week 12" is the thread. The tradition is only the lens.
//
// Single source of truth: nb.pathStart — the Monday the family began.
// The week is DERIVED from today's date, so it moves on its own without the
// parent having to do anything. Nudging forward/back shifts the start date
// rather than storing a second, competing number.

(function () {
  var START_KEY  = 'nb.pathStart';   // ISO yyyy-mm-dd of the starting Monday
  var LEGACY_KEY = 'nb.feastWeek';   // pre-Path manual week counter
  var DAY = 86400000;
  var WEEKS = 52;

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function del(k) { try { localStorage.removeItem(k); } catch (e) {} }

  // Midnight local, so daylight-saving shifts can't nudge us across a boundary.
  function midnight(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

  // The Monday on or before the given date. Weeks turn over on Monday so a
  // "this week" card doesn't change under the parent mid-weekend.
  function mondayOf(d) {
    var m = midnight(d);
    var dow = (m.getDay() + 6) % 7; // 0 = Monday
    return new Date(m.getFullYear(), m.getMonth(), m.getDate() - dow);
  }

  function toISO(d) {
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + mm + '-' + dd;
  }

  function fromISO(s) {
    var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
    if (!p) return null;
    var d = new Date(+p[1], +p[2] - 1, +p[3]);
    return isNaN(d.getTime()) ? null : d;
  }

  // Resolve the start Monday, creating or migrating it on first use.
  function startMonday() {
    var stored = fromISO(get(START_KEY));
    if (stored) return mondayOf(stored);

    var thisMonday = mondayOf(new Date());

    // Migrate anyone who already had a manual week — land them on the same
    // week they were last looking at, so nothing appears to jump.
    var legacy = parseInt(get(LEGACY_KEY) || '', 10);
    if (legacy >= 1 && legacy <= WEEKS) {
      var back = new Date(thisMonday.getTime() - (legacy - 1) * 7 * DAY);
      set(START_KEY, toISO(back));
      return back;
    }

    set(START_KEY, toISO(thisMonday));
    return thisMonday;
  }

  function weeksElapsed() {
    var diff = mondayOf(new Date()).getTime() - startMonday().getTime();
    return Math.floor(diff / (7 * DAY));
  }

  var Path = {
    // Current week, 1–52, wrapping forever.
    week: function () {
      var n = weeksElapsed() % WEEKS;
      return ((n % WEEKS) + WEEKS) % WEEKS + 1;
    },

    // Total weeks since the family started — never wraps. Used later for
    // "you've been walking this for N weeks", never for scoring.
    weeksIn: function () { return Math.max(0, weeksElapsed()) + 1; },

    // How many times round the 52 they've been.
    lap: function () { return Math.floor(Math.max(0, weeksElapsed()) / WEEKS) + 1; },

    startedOn: function () { return startMonday(); },

    // Shift by whole weeks. Positive = look ahead. Moves the start date so
    // there is never a second source of truth to drift out of sync.
    nudge: function (delta) {
      var s = startMonday();
      var moved = new Date(s.getTime() - delta * 7 * DAY);
      set(START_KEY, toISO(moved));
      return Path.week();
    },

    // Jump so that today reads as the given week.
    goTo: function (week) {
      var w = Math.min(WEEKS, Math.max(1, parseInt(week, 10) || 1));
      return Path.nudge(w - Path.week());
    },

    // Begin again from today.
    restart: function () {
      set(START_KEY, toISO(mondayOf(new Date())));
      del(LEGACY_KEY);
      return Path.week();
    },

    // The seasonal term name for a week, if feast-data is loaded.
    term: function (w) {
      var f = window.TERM_OF_WEEK;
      return f ? f(w || Path.week()) : '';
    },

    // This week's whole feast entry, if feast-data is loaded.
    feast: function (w) {
      var list = window.FEAST;
      if (!list) return null;
      return list[(w || Path.week()) - 1] || null;
    },

    virtue: function (w) {
      if (!window.MONTH_OF_WEEK || !window.VIRTUES) return null;
      return window.VIRTUES[window.MONTH_OF_WEEK(w || Path.week())] || null;
    },

    hymn: function (w) {
      if (!window.MONTH_OF_WEEK || !window.HYMNS) return null;
      return window.HYMNS[window.MONTH_OF_WEEK(w || Path.week())] || null;
    }
  };

  window.Path = Path;
})();
