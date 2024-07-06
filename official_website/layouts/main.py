import reflex as rx


def main(*children: list[rx.Component]) -> rx.Component:
    return rx.box(
        *children,
        class_name="py-16 min-h-screen",
    )
