(function ($) {
    $(function () {
        var base_path = "/static/wymeditor/";
        $(".WYMEditor").wymeditor({
            basePath: base_path,
            updateSelector: "input:submit",
            updateEvent: "click",
            //postInitDialog: wymeditor_filebrowser,
            logoHtml: '',
            skin: 'django',
            classesItems: [
                {'name': 'image', 'title': 'DIV: Image w/ Caption', 'expr': 'div'},
                {'name': 'caption', 'title': 'P: Caption', 'expr': 'p'},
                {'name': 'align-left', 'title': 'Float: Left', 'expr': 'p, div, img'},
                {'name': 'align-right', 'title': 'Float: Right', 'expr': 'p, div, img'}
            ],
            wymPath: base_path + 'jquery.wymeditor.js',
            skinPath: base_path + 'skins/django/',
            jQueryPath: '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
            dialogHtml: String() +
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" ' +
                        '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">' +
                '<html dir="' + WYMeditor.DIRECTION + '">' +
                    '<head>' +
                        '<link rel="stylesheet" type="text/css" href="'+window.__admin_media_prefix__+'css/base.css" />' +
                        '<link rel="stylesheet" type="text/css" href="'+window.__admin_media_prefix__+'css/forms.css" />' +
                        '<style type="text/css"> .wym_dialog fieldset { border: 1px solid #EEF; } </style>' +
                        '<link rel="stylesheet" type="text/css" media="screen" ' +
                            'href="' + WYMeditor.CSS_PATH + '" />' +
                        '<title>' + WYMeditor.DIALOG_TITLE + '</title>' +
                        '<script type="text/javascript" ' +
                            'src="' + WYMeditor.JQUERY_PATH + '"></script>' +
                        '<script type="text/javascript" ' +
                            'src="' + WYMeditor.WYM_PATH + '"></script>' +
                    '</head>' +
                    WYMeditor.DIALOG_BODY +
                '</html>'

        });
    });
})(jQuery);
