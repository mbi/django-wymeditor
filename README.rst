================
Django WYMEditor
================

A Django application that contains a widget to render a form field with a
WYMEditor_ interface.

 .. _WYMEditor: http://www.wymeditor.org/

Usage
=====

* Download or fork into your python path.
* Add ``wymeditor`` to your ``INSTALLED_APPS``.
* In your model, use a ``WYMEditorField`` instead of a ``models.TextField``:

    from wymeditor.models import WYMEditorField

    class SomeModel(models.Model):
        an_html_field = WYMEditorField()

* In your ``admin.py``, use ``WYMAdmin`` as the base class instead of ``admin.ModelAdmin`` (or use multiple inheritance and add ``WYMAdmin`` as a mixin)

    from wymeditor.admin import WYMAdmin

    class SomeModelAdmin(WYMAdmin):
        pass

    admin.site.register(SomeModel, SomeModelAdmin)




