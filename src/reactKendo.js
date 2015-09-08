(function(reactKendo) {
//Create common widgets
    var common = reactKendo.common;
    reactKendo.Kendo = {
        AutoComplete: common.createCommonClassForWidget('kendoAutoComplete', (props) => <input {...props} />),
        DatePicker: common.createCommonClassForWidget('kendoDatePicker', (props) => <input {...props} />),
        Button: common.createCommonClassForWidget('kendoButton', (props) => <button {...props}>{props.children}</button>),
        ColorPalette: common.createCommonClassForWidget('kendoColorPalette', (props) => <div {...props}>{props.children}</div>),
        ColorPicker: common.createCommonClassForWidget('kendoColorPicker', (props) => <input {...props} />),
        DateTimePicker: common.createCommonClassForWidget('kendoDateTimePicker', (props) => <input {...props} />),
        DropDownList: common.createCommonClassForWidget('kendoDropDownList', (props) => <select {...props}>{props.children}</select>),
        Editor: common.createCommonClassForWidget('kendoEditor', (props) => <textarea {...props}>{props.children}</textarea>),
        MaskedTextBox: common.createCommonClassForWidget('kendoMaskedTextBox', (props) => <input {...props} />),
        MultiSelect: common.createCommonClassForWidget('kendoMultiSelect', (props) => <select {...props}>{props.children}</select>),
        NumericTextBox: common.createCommonClassForWidget('kendoNumericTextBox', (props) => <input {...props} />),
        Slider: common.createCommonClassForWidget('kendoSlider', (props) => <input {...props} />),
        TimePicker: common.createCommonClassForWidget('kendoTimePicker', (props) => <input {...props} />),
        Upload: common.createCommonClassForWidget('kendoUpload', (props) => <input type="file" {...props} />),
        MobileSwitch: common.createCommonClassForWidget('kendoMobileSwitch', (props) => <input {...props} />),
        MobileButtonGroup: common.createCommonClassForWidget('kendoMobileButtonGroup', (props) => <ul {...props}>{props.children}</ul>),
        Menu: common.createCommonClassForWidget('kendoMenu', (props) => <ul {...props}>{props.children}</ul>),
        PanelBar: common.createCommonClassForWidget('kendoPanelBar', (props) => <ul {...props}>{props.children}</ul>),
        TabStrip: common.createCommonClassForWidget('kendoTabStrip', (props) => <div {...props}>{props.children}</div>),
        ToolBar: common.createCommonClassForWidget('kendoToolBar', (props) => <div {...props}>{props.children}</div>),
        TreeView: common.createCommonClassForWidget('kendoTreeView', (props) => <ul {...props}>{props.children}</ul>),
        Calendar: common.createCommonClassForWidget('kendoCalendar', (props) => <div {...props}>{props.children}</div>),
        Gantt: common.createCommonClassForWidget('kendoGantt', (props) => <div {...props}>{props.children}</div>),
        Scheduler: common.createCommonClassForWidget('kendoScheduler', (props) => <div {...props}>{props.children}</div>),
        Grid: common.createCommonClassForWidget('kendoGrid', (props) => <div {...props}>{props.children}</div>),
        ListView: common.createCommonClassForWidget('kendoListView', (props) => <div {...props}>{props.children}</div>),
        Pager: common.createCommonClassForWidget('kendoPager', (props) => <div {...props}>{props.children}</div>),
        PivotGrid: common.createCommonClassForWidget('kendoPivotGrid', (props) => <div {...props}>{props.children}</div>),
        PivotConfigurator: common.createCommonClassForWidget('kendoPivotConfigurator', (props) => <div {...props}>{props.children}</div>),
        TreeList: common.createCommonClassForWidget('kendoTreeList', (props) => <div {...props}>{props.children}</div>),
//var KendoScrollView <-- this is a mobile swiping view
        Notification: common.createCommonClassForWidget('kendoNotification', (props) => <span {...props}>{props.children}</span>),
//Can responsive panel supply custom tag?
        ResponsivePanel: common.createCommonClassForWidget('kendoResponsivePanel', (props) => <nav {...props}>{props.children}</nav>),
        Splitter: common.createCommonClassForWidget('kendoSplitter', (props) => <div {...props}>{props.children}</div>),
        ToolTip: common.createCommonClassForWidget('kendoToolTip', (props) => <div {...props}>{props.children}</div>),
        Window: common.createCommonClassForWidget('kendoWindow', (props) => <div {...props}>{props.children}</div>),
        Draggable: common.createCommonClassForWidget('kendoDraggable', (props) => <div {...props}>{props.children}</div>),
        DropTarget: common.createCommonClassForWidget('kendoDropTarget', (props) => <div {...props}>{props.children}</div>),
        ProgressBar: common.createCommonClassForWidget('kendoProgressBar', (props) => <div {...props}>{props.children}</div>),
        Sortable: common.createCommonClassForWidget('kendoSortable', (props) => <ul {...props}>{props.children}</ul>),
        Chart: common.createCommonClassForWidget('kendoChart', (props) => <div {...props}>{props.children}</div>),
        BarCode: common.createCommonClassForWidget('kendoBarCode', (props) => <span {...props}>{props.children}</span>),
        QRCode: common.createCommonClassForWidget('kendoQRCode', (props) => <div {...props}>{props.children}</div>),
        LinearGauge: common.createCommonClassForWidget('kendoLinearGauge', (props) => <div {...props}>{props.children}</div>),
        RadialGauge: common.createCommonClassForWidget('kendoRadialGauge', (props) => <div {...props}>{props.children}</div>),
        Diagram: common.createCommonClassForWidget('kendoDiagram', (props) => <div {...props}>{props.children}</div>),
        Map: common.createCommonClassForWidget('kendoMap', (props) => <div {...props}>{props.children}</div>),
        FlatColorPicker: common.createCommonClassForWidget('kendoFlatColorPicker', (props) => <div {...props}>{props.children}</div>)
    };
})(window.reactKendo = window.reactKendo || {});
