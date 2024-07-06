import reflex as rx


def footer(*children: list[rx.Component]) -> rx.Component:
    return rx.container(
        *children,
        class_name="h-16",
    )
