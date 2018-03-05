// --------------------------------------------------------------------------------------
// Alert
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#alert").alert();

// $ExpectType JQuery<HTMLElement>
$("#alert").alert("close");

$("#alert").on("close.bs.alert", () => {});

// --------------------------------------------------------------------------------------
// Button
// --------------------------------------------------------------------------------------

// $ExpectError
$("#button").button();

// $ExpectType JQuery<HTMLElement>
$("#button").button("toggle");

// --------------------------------------------------------------------------------------
// Carousel
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#carousel").carousel();

// $ExpectType JQuery<HTMLElement>
$("#carousel").carousel("pause");

$("#carousel").carousel(100);

$("#carousel").on("slide.bs.carousel", function(ev) {
    const that: HTMLElement = this;
    const from: number = ev.from;
    const to: number = ev.to;
    const direction: string = ev.direction;
    const data: undefined = ev.data;
});

$("#carousel").carousel({
    interval: 5000,
    keyboard: true,
    pause: "hover",
    wrap: true,
});

$("#carousel").carousel({
    pause: false,
});

// --------------------------------------------------------------------------------------
// Collapse
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#collapse").collapse();

// $ExpectType JQuery<HTMLElement>
$("#collapse").collapse("toggle");

$("#collapse").on("show.bs.collapse", () => {});

$("#collapse").collapse({
    parent: "#parent",
    toggle: true,
});

$("#collapse").collapse({
    parent: document.body,
});

$("#collapse").collapse({
    parent: $("#parent"),
});

$("#collapse").collapse({
    toggle: false,
});

// --------------------------------------------------------------------------------------
// Dropdown
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#dropdown").dropdown();

// $ExpectType JQuery<HTMLElement>
$("#dropdown").dropdown("update");

$("#dropdown").on("hide.bs.dropdown", () => {});

$("#dropdown").dropdown({
    offset: 10,
    flip: false,
    boundary: "window",
});

$("#dropdown").dropdown({
    offset: "10px",
});

$("#dropdown").dropdown({
    offset(offsets: BootstrapOffsetsExtend) {
        if (!this.flip)
            return { popper: { left: 100 } };
        return {};
    },
});

$("#dropdown").dropdown({
    boundary: document.body,
});

// --------------------------------------------------------------------------------------
// Modal
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#modal").modal();

// $ExpectType JQuery<HTMLElement>
$("#modal").modal("show");

$("#modal").on("hide.bs.modal", () => {});

$("#modal").modal({
    backdrop: false,
    focus: false,
    keyboard: false,
    show: false,
});

$("#modal").modal({
    backdrop: "static",
});

// --------------------------------------------------------------------------------------
// Popover
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#scrollspy").popover();

// $ExpectType JQuery<HTMLElement>
$("#scrollspy").popover("toggle");

$("#scrollspy").on("activate.bs.scrollspy", () => {});

// TODO: test popover with options

// --------------------------------------------------------------------------------------
// Scrollspy
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#scrollspy").scrollspy();

// $ExpectType JQuery<HTMLElement>
$("#scrollspy").scrollspy("refresh");

$("#scrollspy").on("activate.bs.scrollspy", () => {});

$("#scrollspy").scrollspy({
    offset: 100,
});

// --------------------------------------------------------------------------------------
// Tab
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#someListItem").tab("show");

$("a[data-toggle=\"list\"]").on("shown.bs.tab", (e) => {
    e.target; // newly activated tab
    e.relatedTarget; // previous active tab
});

// --------------------------------------------------------------------------------------
// Tooltip
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#tooltip").tooltip();

// $ExpectType JQuery<HTMLElement>
$("#tooltip").tooltip("show");

$("#tooltip").on("hide.bs.tooltip", () => {});

$("#tooltip").tooltip({
    animation: false,
});

$("#tooltip").tooltip({
    container: "#container",
});

$("#tooltip").tooltip({
    container: document.getElementById("#container") as HTMLElement,
});

$("#tooltip").tooltip({
    container: false,
});

$("#tooltip").tooltip({
    delay: 250,
});

$("#tooltip").tooltip({
    delay: {show: 500, hide: 100},
});

$("#tooltip").tooltip({
    html: true,
});

$("#tooltip").tooltip({
    placement: "auto",
});

$("#tooltip").tooltip({
    placement(this, tooltip, trigger) {
        console.log(this.tip === tooltip);
        console.log(this.element === trigger);
        console.log(this.config.html);
        return "left";
    },
});

$("#tooltip").tooltip({
    selector: "[rel=\"tooltip\"]",
});

$("#tooltip").tooltip({
    selector: false,
});

$("#tooltip").tooltip({
    template: '<div class="tooltip empty" role="tooltip"></div>',
});

$("#tooltip").tooltip({
    title: "Hello world",
});

$("#tooltip").tooltip({
    title: document.getElementById("title-element") as HTMLElement,
});

$("#tooltip").tooltip({
    title(this: Element) {
        return this.textContent as string;
    },
});

$("#tooltip").tooltip({
    trigger: "focus hover",
});

$("#tooltip").tooltip({
    offset: 10,
});

$("#tooltip").tooltip({
    offset: "10px",
});

$("#tooltip").tooltip({
    fallbackPlacement: "clockwise",
});

$("#tooltip").tooltip({
    fallbackPlacement: ["flip", "clockwise"],
});

$("#tooltip").tooltip({
    boundary: "scrollParent",
});

$("#tooltip").tooltip({
    boundary: document.body,
});
