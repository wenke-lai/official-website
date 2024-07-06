import reflex as rx

from official_website.meta import DESCRIPTION


@rx.page(route="/document", title="Wenke Studio", description=DESCRIPTION)
def document() -> rx.Component:
    return rx.center(rx.text("Document"))
