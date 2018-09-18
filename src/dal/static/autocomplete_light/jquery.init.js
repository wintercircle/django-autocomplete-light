var yl = yl || {};
// Directly above this file, we included the jQuery provided by django. That
// means it set itself to window.$ and window.jQuery, and stored away any
// existing jQuery that may have been installed previously. Calling
// jQuery.noConflict(true) will remove OUR copy of jQuery from the global
// namespace and restore the original values of window.$ and window.jQuery.
// This is necessary so that code which uses a version of jQuery that may
// have been installed up-page gets the version it expects.
yl.jQuery = django.jQuery.noConflict(true);
