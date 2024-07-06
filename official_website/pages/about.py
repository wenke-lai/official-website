import reflex as rx

from official_website.meta import DESCRIPTION


@rx.page(route="/about", title="Wenke Studio", description=DESCRIPTION)
def about() -> rx.Component:
    return rx.center(rx.text("About"))
