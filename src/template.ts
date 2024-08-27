import type * as Color from "color";

export enum ThemeType {
  DEFAULT = "default",
  BORDERED = "bordered",
  ONE_DARK = "one-dark",
}

export default (colors: Color[], themeType: ThemeType) => ({
  type: "dark",
  colors: {
    // Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

    // CONTRAST COLOURS
    // --
    "DEBUGGING6_COLORS": colors.map((color, index) => { return { index, color: color.hex() }; }),

    // BASE COLOURS
    "focusBorder": `${colors[8].hex()}77`,
    "foreground": `${colors[7].hex()}99`,
    "widget.shadow": colors[0].darken(0.25).hex(),
    "selection.background": `${colors[7].hex()}77`,

    // TEXT COLOURS
    "textBlockQuote.background": colors[0].lighten(0.20).hex(),
    "textLink.foreground": colors[1].hex(),
    "textLink.activeForeground": colors[1].hex(),
    "textPreformat.foreground": colors[7].hex(),

    // BUTTON CONTROL
    "button.background": colors[1].hex(),
    "button.foreground": colors[0].hex(),
    // 'button.hoverBackground': '',

    // DROPDOWN CONTROL
    "dropdown.background": colors[0].lighten(0.20).hex(),
    "dropdown.foreground": `${colors[7].hex()}99`,
    "dropdown.border": `${colors[8].hex()}77`,

    // INPUT CONTROL
    "input.background": colors[0].lighten(0.20).hex(),
    "input.border": `${colors[8].hex()}55`,
    "input.foreground": colors[7].hex(),
    "input.placeholderForeground": `${colors[8].hex()}77`,
    "inputOption.activeBorder": colors[1].hex(),
    "inputValidation.errorBackground": colors[0].hex(),
    "inputValidation.errorBorder": colors[4].hex(),
    "inputValidation.infoBackground": colors[0].hex(),
    "inputValidation.infoBorder": colors[2].hex(),
    "inputValidation.warningBackground": colors[0].hex(),
    "inputValidation.warningBorder": colors[3].hex(),

    // SCROLLBAR CONTROL
    "scrollbar.shadow": `${colors[8].hex()}33`,
    "scrollbarSlider.background": `${colors[7].hex()}44`,
    "scrollbarSlider.hoverBackground": `${colors[7].hex()}77`,
    "scrollbarSlider.activeBackground": `${colors[7].hex()}92`,

    // BADGE
    "badge.background": colors[1].hex(),
    "badge.foreground": colors[0].hex(),

    // PROGRESS BAR
    "progressBar.background": colors[1].hex(),

    // LISTS AND TREES
    "list.activeSelectionBackground": `${colors[8].hex()}33`,
    "list.activeSelectionForeground": colors[7].hex(),
    "list.focusBackground": `${colors[8].hex()}33`,
    "list.focusForeground": `${colors[7].hex()}99`,
    "list.highlightForeground": colors[1].hex(),
    "list.hoverBackground": `${colors[8].hex()}33`,
    "list.hoverForeground": `${colors[7].hex()}99`,
    "list.inactiveSelectionBackground": `${colors[8].hex()}33`,
    "list.inactiveSelectionForeground": `${colors[7].hex()}99`,
    "list.invalidItemForeground": `${colors[7].hex()}77`,

    // ACTIVITY BAR
    "activityBar.background": colors[0].hex(),
    "activityBar.foreground": colors[8].hex(),
    "activityBar.border": themeType === ThemeType.BORDERED ? `${colors[8].hex()}33` : colors[0].hex(),
    "activityBarBadge.background": colors[1].hex(),
    "activityBarBadge.foreground": colors[0].hex(),

    // SIDE BAR
    "sideBar.background": colors[0].hex(),
    "sideBar.border": themeType === ThemeType.BORDERED ? `${colors[8].hex()}33` : colors[0].hex(),
    "sideBarTitle.foreground": `${colors[7].hex()}99`,
    "sideBarSectionHeader.background": colors[0].hex(),
    "sideBarSectionHeader.foreground": `${colors[7].hex()}99`,

    // EDITOR GROUPS & TABS
    "editorGroup.border": `${colors[8].hex()}33`,
    // 'editorGroup.background': colors[0].lighten(0.20).hex(), // deprecated
    "editorGroupHeader.noTabsBackground": colors[0].hex(),
    "editorGroupHeader.tabsBackground": colors[0].hex(),
    "editorGroupHeader.tabsBorder": themeType === ThemeType.BORDERED ? `${colors[8].hex()}33` : colors[0].hex(),
    "tab.activeBackground": themeType === ThemeType.BORDERED ? colors[0].lighten(0.20).hex() : colors[0].hex(),
    "tab.activeForeground": colors[7].hex(),
    "tab.border": themeType === ThemeType.BORDERED ? `${colors[8].hex()}33` : colors[0].hex(),
    "tab.activeBorder": themeType === ThemeType.BORDERED ? undefined : colors[1].hex(),
    "tab.activeBorderTop": themeType === ThemeType.BORDERED ? colors[1].hex() : undefined,
    "tab.unfocusedActiveBorder": themeType === ThemeType.BORDERED ? undefined : `${colors[7].hex()}99`,
    "tab.unfocusedActiveBorderTop": themeType === ThemeType.BORDERED ? `${colors[7].hex()}99` : undefined,
    "tab.inactiveBackground": colors[0].hex(),
    "tab.inactiveForeground": `${colors[7].hex()}99`,
    "tab.unfocusedActiveForeground": `${colors[7].hex()}99`,
    "tab.unfocusedInactiveForeground": `${colors[7].hex()}99`,

    // EDITOR
    "editor.background": themeType === ThemeType.BORDERED ? colors[0].lighten(0.20).hex() : colors[0].hex(),
    "editor.foreground": colors[7].hex(),
    "editorLineNumber.foreground": `${colors[8].hex()}92`,
    "editorLineNumber.activeForeground": colors[8].hex(),
    "editorCursor.foreground": colors[1].hex(),

    "editor.selectionBackground": `${colors[8].hex()}77`,
    "editor.inactiveSelectionBackground": `${colors[8].hex()}44`,
    "editor.selectionHighlightBackground": `${colors[8].hex()}44`,
    "editor.selectionHighlightBorder": colors[8].hex(),

    "editor.wordHighlightBackground": `${colors[8].hex()}44`,
    "editor.wordHighlightStrongBackground": `${colors[2].hex()}77`,

    "editor.findMatchBackground": `${colors[1].hex()}0e`,
    "editor.findMatchBorder": colors[1].hex(),
    "editor.findMatchHighlightBackground": `${colors[1].hex()}0e`,
    "editor.findMatchHighlightBorder": `${colors[1].hex()}66`,
    "editor.findRangeHighlightBackground": `${colors[8].hex()}44`,
    "editor.findRangeHighlightBorder": `${colors[0].hex()}00`,

    // 'editor.hoverHighlightBackground': '',

    "editor.lineHighlightBackground": `${colors[7].hex()}22`,
    // 'editor.lineHighlightBorder': '',

    "editorLink.activeForeground": colors[1].hex(),

    "editor.rangeHighlightBackground": `${colors[8].hex()}33`,

    "editorWhitespace.foreground": `${colors[8].hex()}66`,

    "editorIndentGuide.background": `${colors[8].hex()}44`,
    "editorIndentGuide.activeBackground": `${colors[8].hex()}77`,

    "editorRuler.foreground": `${colors[8].hex()}44`,
    "editorCodeLens.foreground": `${colors[8].hex()}b0`,

    "editorBracketMatch.background": `${colors[8].hex()}33`,
    "editorBracketMatch.border": `${colors[8].hex()}55`,

    // BRACKET MATCHES
    "editorBracketHighlight.foreground1": colors[6].hex(),
    "editorBracketHighlight.foreground2": colors[5].hex(),
    "editorBracketHighlight.foreground3": colors[4].hex(),
    "editorBracketHighlight.foreground4": colors[3].hex(),
    "editorBracketHighlight.foreground5": colors[2].hex(),
    "editorBracketHighlight.foreground6": colors[1].hex(),

    // OVERVIEW RULER
    "editorOverviewRuler.border": `${colors[8].hex()}33`,
    "editorOverviewRuler.modifiedForeground": `${colors[3].hex()}bb`,
    "editorOverviewRuler.addedForeground": `${colors[2].hex()}bb`,
    "editorOverviewRuler.deletedForeground": `${colors[4].hex()}bb`,
    "editorOverviewRuler.errorForeground": colors[4].hex(),
    "editorOverviewRuler.warningForeground": colors[1].hex(),

    // ERRORS AND WARNINGS
    "editorError.foreground": colors[4].hex(),
    "editorWarning.foreground": colors[1].hex(),

    // GUTTER
    "editorGutter.modifiedBackground": `${colors[3].hex()}bb`,
    "editorGutter.addedBackground": `${colors[2].hex()}bb`,
    "editorGutter.deletedBackground": `${colors[4].hex()}bb`,

    // DIFF EDITOR
    "diffEditor.insertedTextBackground": `${colors[10].hex()}33`,
    "diffEditor.removedTextBackground": `${colors[3].hex()}33`,

    // EDITOR WIDGET
    "editorWidget.background": colors[0].lighten(0.20).hex(),
    "editorSuggestWidget.background": colors[0].lighten(0.20).hex(),
    "editorSuggestWidget.border": `${colors[8].hex()}22`,
    "editorSuggestWidget.highlightForeground": colors[1].hex(),
    "editorSuggestWidget.selectedBackground": `${colors[8].hex()}33`,
    "editorHoverWidget.background": colors[0].lighten(0.20).hex(),
    "editorHoverWidget.border": `${colors[8].hex()}22`,

    // DEBUG EXCEPTION
    "debugExceptionWidget.border": `${colors[8].hex()}33`,
    "debugExceptionWidget.background": colors[0].lighten(0.20).hex(),

    // EDITOR MARKER
    "editorMarkerNavigation.background": colors[0].lighten(0.20).hex(),

    // PEEK VIEW
    "peekView.border": `${colors[8].hex()}33`,
    "peekViewEditor.background": colors[0].lighten(0.20).hex(),
    "peekViewEditor.matchHighlightBackground": `${colors[1].hex()}44`,
    "peekViewResult.background": colors[0].lighten(0.20).hex(),
    "peekViewResult.fileForeground": `${colors[7].hex()}99`,
    "peekViewResult.matchHighlightBackground": `${colors[1].hex()}44`,
    "peekViewTitle.background": colors[0].lighten(0.20).hex(),
    "peekViewTitleDescription.foreground": `${colors[7].hex()}99`,
    "peekViewTitleLabel.foreground": `${colors[7].hex()}99`,

    // Merge Conflicts
    // 'merge.currentHeaderBackground': '?',
    // 'merge.currentContentBackground': '?',
    // 'merge.incomingHeaderBackground': '?',
    // 'merge.incomingContentBackground': '?',
    // 'merge.border': '?',
    // 'merge.commonContentBackground': '?',
    // 'merge.commonHeaderBackground': '?',
    // 'editorOverviewRuler.currentContentForeground': '?',
    // 'editorOverviewRuler.incomingContentForeground': '?',
    // 'editorOverviewRuler.commonContentForeground': '?',

    // Panel
    "panel.background": colors[0].hex(),
    "panel.border": `${colors[8].hex()}33`,
    "panelTitle.activeBorder": colors[1].hex(),
    "panelTitle.activeForeground": colors[7].hex(),
    "panelTitle.inactiveForeground": `${colors[7].hex()}99`,

    // STATUS BAR
    "statusBar.background": colors[0].hex(),
    "statusBar.foreground": colors[7].hex(),
    "statusBar.border": themeType === ThemeType.BORDERED ? `${colors[8].hex()}33` : colors[0].hex(),
    "statusBar.debuggingBackground": colors[3].hex(),
    "statusBar.debuggingForeground": `${colors[0].hex()}dd`,
    "statusBar.noFolderBackground": colors[0].lighten(0.20).hex(),
    "statusBarItem.activeBackground": "#00000050",
    "statusBarItem.hoverBackground": "#00000030",
    "statusBarItem.prominentBackground": `${colors[8].hex()}33`,
    "statusBarItem.prominentHoverBackground": "#00000030",

    // TITLE BAR
    "titleBar.activeBackground": colors[0].hex(),
    "titleBar.activeForeground": colors[7].hex(),
    "titleBar.inactiveBackground": colors[0].hex(),
    "titleBar.inactiveForeground": colors[7].hex(),
    "titleBar.border": themeType === ThemeType.BORDERED ? `${colors[8].hex()}33` : colors[0].hex(),

    // MENU BAR
    // 'menubar.selectionForeground': '?',
    // 'menubar.selectionBackground': '?',
    // 'menubar.selectionBorder': '?',
    // 'menu.foreground': '?',
    // 'menu.background': '?',
    // 'menu.selectionForeground': '?',
    // 'menu.selectionBackground': '?',
    // 'menu.selectionBorder': '?',

    // NOTIFICATION
    // 'notificationCenter.border': '?',
    // 'notificationCenterHeader.foreground': '?',
    // 'notificationCenterHeader.background': '?',
    // 'notificationToast.border': '?',
    // 'notifications.foreground': '?',
    // 'notifications.background': '?',
    // 'notifications.border': '?',
    // 'notificationLink.foreground': '?',

    // EXTENSIONS
    "extensionButton.prominentForeground": colors[0].hex(),
    "extensionButton.prominentBackground": colors[1].hex(),
    "extensionButton.prominentHoverBackground": `${colors[1].hex()}b3`,

    // QUICK PICKER
    "pickerGroup.border": `${colors[8].hex()}33`,
    "pickerGroup.foreground": `${colors[7].hex()}b3`,

    // DEBUG
    "debugTokenExpression.value": `${colors[7].hex()}b3`,
    "debugToolBar.background": colors[0].hex(),
    // 'debugToolBar.border': '',

    // WELCOME PAGE
    // 'welcomePage.buttonBackground': '?'
    // 'welcomePage.buttonHoverBackground': '?'
    "walkThrough.embeddedEditorBackground": colors[0].lighten(0.20).hex(),

    // GIT
    "gitDecoration.modifiedResourceForeground": `${colors[3].hex()}cc`,
    "gitDecoration.deletedResourceForeground": `${colors[4].hex()}cc`,
    "gitDecoration.untrackedResourceForeground": `${colors[2].hex()}cc`,
    "gitDecoration.ignoredResourceForeground": `${colors[7].hex()}66`,
    // 'gitDecoration.conflictingResourceForeground': '?',
    "gitDecoration.submoduleResourceForeground": `${colors[13].hex()}b0`,

    // Settings
    "settings.headerForeground": colors[7].hex(),
    "settings.modifiedItemIndicator": colors[2].hex(),

    // TERMINAL
    "terminal.background": colors[0].hex(),
    "terminal.foreground": colors[7].hex(),
    "terminal.ansiBlack": colors[0].hex(),

    "terminal.ansiRed": colors[1].hex(),
    "terminal.ansiGreen": colors[2].hex(),
    "terminal.ansiYellow": colors[3].hex(),
    "terminal.ansiBlue": colors[4].hex(),
    "terminal.ansiMagenta": colors[5].hex(),
    "terminal.ansiCyan": colors[6].hex(),
    "terminal.ansiWhite": colors[7].hex(),
    "terminal.ansiBrightBlack": colors[8].hex(),
    "terminal.ansiBrightRed": colors[9].hex(),
    "terminal.ansiBrightGreen": colors[10].hex(),
    "terminal.ansiBrightYellow": colors[11].hex(),
    "terminal.ansiBrightBlue": colors[12].hex(),
    "terminal.ansiBrightMagenta": colors[13].hex(),
    "terminal.ansiBrightCyan": colors[14].hex(),
    "terminal.ansiBrightWhite": colors[15].hex(),
  },
  tokenColors: themeType === ThemeType.ONE_DARK
    ? [
      {
        name: "Comment",
        scope: ["comment"],
        settings: { foreground: `${colors[8].hex()}b0`, fontStyle: "italic" },
      },
      {
        name: "Comment Markup Link",
        scope: ["comment markup.link"],
        settings: { foreground: `${colors[8].hex()}b0` },
      },
      {
        name: "Entity Name Type",
        scope: ["entity.name.type"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Entity Other Inherited Class",
        scope: ["entity.other.inherited-class"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Keyword",
        scope: ["keyword"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Keyword Control",
        scope: ["keyword.control"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Keyword Operator",
        scope: ["keyword.operator"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Keyword Other Special Method",
        scope: ["keyword.other.special-method"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Keyword Other Unit",
        scope: ["keyword.other.unit"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Storage",
        scope: ["storage"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Storage Type Annotation,storage Type Primitive",
        scope: ["storage.type.annotation", "storage.type.primitive"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Storage Modifier Package,storage Modifier Import",
        scope: ["storage.modifier.package", "storage.modifier.import"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Constant",
        scope: ["constant"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Constant Variable",
        scope: ["constant.variable"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Constant Character Escape",
        scope: ["constant.character.escape"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Constant Numeric",
        scope: ["constant.numeric"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Constant Other Color",
        scope: ["constant.other.color"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Constant Other Symbol",
        scope: ["constant.other.symbol"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Variable",
        scope: ["variable"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Variable Interpolation",
        scope: ["variable.interpolation"],
        settings: { foreground: "#BE5046" },
      },
      {
        name: "Variable Parameter",
        scope: ["variable.parameter"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "String",
        scope: ["string"],
        settings: { foreground: "#98C379" },
      },
      {
        name: "String > Source,string Embedded",
        scope: ["string > source", "string embedded"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "String Regexp",
        scope: ["string.regexp"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "String Regexp Source Ruby Embedded",
        scope: ["string.regexp source.ruby.embedded"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "String Other Link",
        scope: ["string.other.link"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Punctuation Definition Comment",
        scope: ["punctuation.definition.comment"],
        settings: { foreground: `${colors[8].hex()}b0` },
      },
      {
        name: "Punctuation Definition Method Parameters,punctuation Definition Function Parameters,punctuation Definition Parameters,punctuation Definition Separator,punctuation Definition Seperator,punctuation Definition Array",
        scope: [
          "punctuation.definition.method-parameters",
          "punctuation.definition.function-parameters",
          "punctuation.definition.parameters",
          "punctuation.definition.separator",
          "punctuation.definition.seperator",
          "punctuation.definition.array",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Punctuation Definition Heading,punctuation Definition Identity",
        scope: [
          "punctuation.definition.heading",
          "punctuation.definition.identity",
        ],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Punctuation Definition Bold",
        scope: ["punctuation.definition.bold"],
        settings: { foreground: "#E5C07B", fontStyle: "bold" },
      },
      {
        name: "Punctuation Definition Italic",
        scope: ["punctuation.definition.italic"],
        settings: { foreground: "#C678DD", fontStyle: "italic" },
      },
      {
        name: "Punctuation Section Embedded",
        scope: ["punctuation.section.embedded"],
        settings: { foreground: "#BE5046" },
      },
      {
        name: "Punctuation Section Method,punctuation Section Class,punctuation Section Inner Class",
        scope: [
          "punctuation.section.method",
          "punctuation.section.class",
          "punctuation.section.inner-class",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Support Class",
        scope: ["support.class"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Support Type",
        scope: ["support.type"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Support Function",
        scope: ["support.function"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Support Function Any Method",
        scope: ["support.function.any-method"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Entity Name Function",
        scope: ["entity.name.function"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Entity Name Class,entity Name Type Class",
        scope: ["entity.name.class", "entity.name.type.class"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Entity Name Section",
        scope: ["entity.name.section"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Entity Name Tag",
        scope: ["entity.name.tag"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Entity Other Attribute Name",
        scope: ["entity.other.attribute-name"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Entity Other Attribute Name Id",
        scope: ["entity.other.attribute-name.id"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Meta Class",
        scope: ["meta.class"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Meta Class Body",
        scope: ["meta.class.body"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Meta Method Call,meta Method",
        scope: ["meta.method-call", "meta.method"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Meta Definition Variable",
        scope: ["meta.definition.variable"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Meta Link",
        scope: ["meta.link"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Meta Require",
        scope: ["meta.require"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Meta Selector",
        scope: ["meta.selector"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Meta Separator",
        scope: ["meta.separator"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Meta Tag",
        scope: ["meta.tag"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Underline",
        scope: ["underline"],
        settings: { "text-decoration": "underline" },
      },
      {
        name: "None",
        scope: ["none"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Invalid Deprecated",
        scope: ["invalid.deprecated"],
        settings: { foreground: "#523D14", background: "#E0C285" },
      },
      {
        name: "Invalid Illegal",
        scope: ["invalid.illegal"],
        settings: { foreground: "white", background: "#E05252" },
      },
      {
        name: "Markup Bold",
        scope: ["markup.bold"],
        settings: { foreground: "#D19A66", fontStyle: "bold" },
      },
      {
        name: "Markup Changed",
        scope: ["markup.changed"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Markup Deleted",
        scope: ["markup.deleted"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Markup Italic",
        scope: ["markup.italic"],
        settings: { foreground: "#C678DD", fontStyle: "italic" },
      },
      {
        name: "Markup Heading",
        scope: ["markup.heading"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Markup Heading Punctuation Definition Heading",
        scope: ["markup.heading punctuation.definition.heading"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Markup Link",
        scope: ["markup.link"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Markup Inserted",
        scope: ["markup.inserted"],
        settings: { foreground: "#98C379" },
      },
      {
        name: "Markup Quote",
        scope: ["markup.quote"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Markup Raw",
        scope: ["markup.raw"],
        settings: { foreground: "#98C379" },
      },
      {
        name: "Source C Keyword Operator",
        scope: ["source.c keyword.operator"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Source Cpp Keyword Operator",
        scope: ["source.cpp keyword.operator"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Source Cs Keyword Operator",
        scope: ["source.cs keyword.operator"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Source Css Property Name,source Css Property Value",
        scope: ["source.css property-name", "source.css property-value"],
        settings: { foreground: "#828997" },
      },
      {
        name: "Source Css Property Name Support,source Css Property Value Support",
        scope: [
          "source.css property-name.support",
          "source.css property-value.support",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Source Elixir Source Embedded Source",
        scope: ["source.elixir source.embedded.source"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Source Elixir Constant Language,source Elixir Constant Numeric,source Elixir Constant Definition",
        scope: [
          "source.elixir constant.language",
          "source.elixir constant.numeric",
          "source.elixir constant.definition",
        ],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Source Elixir Variable Definition,source Elixir Variable Anonymous",
        scope: [
          "source.elixir variable.definition",
          "source.elixir variable.anonymous",
        ],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Source Elixir Parameter Variable Function",
        scope: ["source.elixir parameter.variable.function"],
        settings: { foreground: "#D19A66", fontStyle: "italic" },
      },
      {
        name: "Source Elixir Quoted",
        scope: ["source.elixir quoted"],
        settings: { foreground: "#98C379" },
      },
      {
        name: "Source Elixir Keyword Special Method,source Elixir Embedded Section,source Elixir Embedded Source Empty",
        scope: [
          "source.elixir keyword.special-method",
          "source.elixir embedded.section",
          "source.elixir embedded.source.empty",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Source Elixir Readwrite Module Punctuation",
        scope: ["source.elixir readwrite.module punctuation"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Source Elixir Regexp Section,source Elixir Regexp String",
        scope: ["source.elixir regexp.section", "source.elixir regexp.string"],
        settings: { foreground: "#BE5046" },
      },
      {
        name: "Source Elixir Separator,source Elixir Keyword Operator",
        scope: ["source.elixir separator", "source.elixir keyword.operator"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Source Elixir Variable Constant",
        scope: ["source.elixir variable.constant"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Source Elixir Array,source Elixir Scope,source Elixir Section",
        scope: [
          "source.elixir array",
          "source.elixir scope",
          "source.elixir section",
        ],
        settings: { foreground: "#828997" },
      },
      {
        name: "Source Gfm Markup",
        scope: ["source.gfm markup"],
        settings: { "-webkit-font-smoothing": "auto" },
      },
      {
        name: "Source Gfm Link Entity",
        scope: ["source.gfm link entity"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Source Go Storage Type String",
        scope: ["source.go storage.type.string"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Source Ini Keyword Other Definition Ini",
        scope: ["source.ini keyword.other.definition.ini"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Source Java Storage Modifier Import",
        scope: ["source.java storage.modifier.import"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Source Java Storage Type",
        scope: ["source.java storage.type"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Source Java Keyword Operator Instanceof",
        scope: ["source.java keyword.operator.instanceof"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Source Java Properties Meta Key Pair",
        scope: ["source.java-properties meta.key-pair"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Source Java Properties Meta Key Pair > Punctuation",
        scope: ["source.java-properties meta.key-pair > punctuation"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Source Js Keyword Operator",
        scope: ["source.js keyword.operator"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
        scope: [
          "source.js keyword.operator.delete",
          "source.js keyword.operator.in",
          "source.js keyword.operator.of",
          "source.js keyword.operator.instanceof",
          "source.js keyword.operator.new",
          "source.js keyword.operator.typeof",
          "source.js keyword.operator.void",
        ],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Source Ts Keyword Operator",
        scope: ["source.ts keyword.operator"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Source Flow Keyword Operator",
        scope: ["source.flow keyword.operator"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
        scope: [
          "source.json meta.structure.dictionary.json > string.quoted.json",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
        scope: [
          "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
        scope: [
          "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
          "source.json meta.structure.array.json > value.json > string.quoted.json",
          "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
          "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
        ],
        settings: { foreground: "#98C379" },
      },
      {
        name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
        scope: [
          "source.json meta.structure.dictionary.json > constant.language.json",
          "source.json meta.structure.array.json > constant.language.json",
        ],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Ng Interpolation",
        scope: ["ng.interpolation"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Ng Interpolation Begin,ng Interpolation End",
        scope: ["ng.interpolation.begin", "ng.interpolation.end"],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Ng Interpolation Function",
        scope: ["ng.interpolation function"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "Ng Interpolation Function Begin,ng Interpolation Function End",
        scope: [
          "ng.interpolation function.begin",
          "ng.interpolation function.end",
        ],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "Ng Interpolation Bool",
        scope: ["ng.interpolation bool"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "Ng Interpolation Bracket",
        scope: ["ng.interpolation bracket"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Ng Pipe,ng Operator",
        scope: ["ng.pipe", "ng.operator"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Ng Tag",
        scope: ["ng.tag"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "Ng Attribute With Value Attribute Name",
        scope: ["ng.attribute-with-value attribute-name"],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "Ng Attribute With Value String",
        scope: ["ng.attribute-with-value string"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Ng Attribute With Value String Begin,ng Attribute With Value String End",
        scope: [
          "ng.attribute-with-value string.begin",
          "ng.attribute-with-value string.end",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Source Ruby Constant Other Symbol > Punctuation",
        scope: ["source.ruby constant.other.symbol > punctuation"],
        settings: { foreground: "inherit" },
      },
      {
        name: "Source Php Class Bracket",
        scope: ["source.php class.bracket"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "Source Python Keyword Operator Logical Python",
        scope: ["source.python keyword.operator.logical.python"],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "Source Python Variable Parameter",
        scope: ["source.python variable.parameter"],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "customrule",
        scope: "customrule",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Support Type Property Name",
        scope: "support.type.property-name",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Punctuation for Quoted String",
        scope: "string.quoted.double punctuation",
        settings: { foreground: "#98C379" },
      },
      {
        name: "[VSCODE-CUSTOM] Support Constant",
        scope: "support.constant",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] JSON Property Name",
        scope: "support.type.property-name.json",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
        scope: "support.type.property-name.json punctuation",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Punctuation for key-value",
        scope: [
          "punctuation.separator.key-value.ts",
          "punctuation.separator.key-value.js",
          "punctuation.separator.key-value.tsx",
        ],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Embedded Operator",
        scope: [
          "source.js.embedded.html keyword.operator",
          "source.ts.embedded.html keyword.operator",
        ],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Variable Other Readwrite",
        scope: [
          "variable.other.readwrite.js",
          "variable.other.readwrite.ts",
          "variable.other.readwrite.tsx",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Support Variable Dom",
        scope: ["support.variable.dom.js", "support.variable.dom.ts"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Support Variable Property Dom",
        scope: [
          "support.variable.property.dom.js",
          "support.variable.property.dom.ts",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Interpolation String Punctuation",
        scope: [
          "meta.template.expression.js punctuation.definition",
          "meta.template.expression.ts punctuation.definition",
        ],
        settings: { foreground: "#BE5046" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Punctuation Type Parameters",
        scope: [
          "source.ts punctuation.definition.typeparameters",
          "source.js punctuation.definition.typeparameters",
          "source.tsx punctuation.definition.typeparameters",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Definition Block",
        scope: [
          "source.ts punctuation.definition.block",
          "source.js punctuation.definition.block",
          "source.tsx punctuation.definition.block",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Punctuation Separator Comma",
        scope: [
          "source.ts punctuation.separator.comma",
          "source.js punctuation.separator.comma",
          "source.tsx punctuation.separator.comma",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Variable Property",
        scope: [
          "support.variable.property.js",
          "support.variable.property.ts",
          "support.variable.property.tsx",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Default Keyword",
        scope: [
          "keyword.control.default.js",
          "keyword.control.default.ts",
          "keyword.control.default.tsx",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Instanceof Keyword",
        scope: [
          "keyword.operator.expression.instanceof.js",
          "keyword.operator.expression.instanceof.ts",
          "keyword.operator.expression.instanceof.tsx",
        ],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Of Keyword",
        scope: [
          "keyword.operator.expression.of.js",
          "keyword.operator.expression.of.ts",
          "keyword.operator.expression.of.tsx",
        ],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Braces/Brackets",
        scope: [
          "meta.brace.round.js",
          "meta.array-binding-pattern-variable.js",
          "meta.brace.square.js",
          "meta.brace.round.ts",
          "meta.array-binding-pattern-variable.ts",
          "meta.brace.square.ts",
          "meta.brace.round.tsx",
          "meta.array-binding-pattern-variable.tsx",
          "meta.brace.square.tsx",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Punctuation Accessor",
        scope: [
          "source.js punctuation.accessor",
          "source.ts punctuation.accessor",
          "source.tsx punctuation.accessor",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Punctuation Terminator Statement",
        scope: [
          "punctuation.terminator.statement.js",
          "punctuation.terminator.statement.ts",
          "punctuation.terminator.statement.tsx",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Array variables",
        scope: [
          "meta.array-binding-pattern-variable.js variable.other.readwrite.js",
          "meta.array-binding-pattern-variable.ts variable.other.readwrite.ts",
          "meta.array-binding-pattern-variable.tsx variable.other.readwrite.tsx",
        ],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Support Variables",
        scope: [
          "source.js support.variable",
          "source.ts support.variable",
          "source.tsx support.variable",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Support Variables",
        scope: [
          "variable.other.constant.property.js",
          "variable.other.constant.property.ts",
          "variable.other.constant.property.tsx",
        ],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Keyword New",
        scope: [
          "keyword.operator.new.ts",
          "keyword.operator.new.j",
          "keyword.operator.new.tsx",
        ],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "[VSCODE-CUSTOM] TS Keyword Operator",
        scope: ["source.ts keyword.operator", "source.tsx keyword.operator"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Punctuation Parameter Separator",
        scope: [
          "punctuation.separator.parameter.js",
          "punctuation.separator.parameter.ts",
          "punctuation.separator.parameter.tsx ",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Import",
        scope: [
          "constant.language.import-export-all.js",
          "constant.language.import-export-all.ts",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JSX/TSX Import",
        scope: [
          "constant.language.import-export-all.jsx",
          "constant.language.import-export-all.tsx",
        ],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Keyword Control As",
        scope: [
          "keyword.control.as.js",
          "keyword.control.as.ts",
          "keyword.control.as.jsx",
          "keyword.control.as.tsx",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Variable Alias",
        scope: [
          "variable.other.readwrite.alias.js",
          "variable.other.readwrite.alias.ts",
          "variable.other.readwrite.alias.jsx",
          "variable.other.readwrite.alias.tsx",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Constants",
        scope: [
          "variable.other.constant.js",
          "variable.other.constant.ts",
          "variable.other.constant.jsx",
          "variable.other.constant.tsx",
        ],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Export Variable",
        scope: [
          "meta.export.default.js variable.other.readwrite.js",
          "meta.export.default.ts variable.other.readwrite.ts",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Template Strings Punctuation Accessor",
        scope: [
          "source.js meta.template.expression.js punctuation.accessor",
          "source.ts meta.template.expression.ts punctuation.accessor",
          "source.tsx meta.template.expression.tsx punctuation.accessor",
        ],
        settings: { foreground: "#98C379" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Import equals",
        scope: [
          "source.js meta.import-equals.external.js keyword.operator",
          "source.jsx meta.import-equals.external.jsx keyword.operator",
          "source.ts meta.import-equals.external.ts keyword.operator",
          "source.tsx meta.import-equals.external.tsx keyword.operator",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Type Module",
        scope: "entity.name.type.module.js,entity.name.type.module.ts,entity.name.type.module.jsx,entity.name.type.module.tsx",
        settings: { foreground: "#98C379" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Meta Class",
        scope: "meta.class.js,meta.class.ts,meta.class.jsx,meta.class.tsx",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Property Definition Variable",
        scope: [
          "meta.definition.property.js variable",
          "meta.definition.property.ts variable",
          "meta.definition.property.jsx variable",
          "meta.definition.property.tsx variable",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Meta Type Parameters Type",
        scope: [
          "meta.type.parameters.js support.type",
          "meta.type.parameters.jsx support.type",
          "meta.type.parameters.ts support.type",
          "meta.type.parameters.tsx support.type",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Meta Tag Keyword Operator",
        scope: [
          "source.js meta.tag.js keyword.operator",
          "source.jsx meta.tag.jsx keyword.operator",
          "source.ts meta.tag.ts keyword.operator",
          "source.tsx meta.tag.tsx keyword.operator",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Meta Tag Punctuation",
        scope: [
          "meta.tag.js punctuation.section.embedded",
          "meta.tag.jsx punctuation.section.embedded",
          "meta.tag.ts punctuation.section.embedded",
          "meta.tag.tsx punctuation.section.embedded",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Meta Array Literal Variable",
        scope: [
          "meta.array.literal.js variable",
          "meta.array.literal.jsx variable",
          "meta.array.literal.ts variable",
          "meta.array.literal.tsx variable",
        ],
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Module Exports",
        scope: [
          "support.type.object.module.js",
          "support.type.object.module.jsx",
          "support.type.object.module.ts",
          "support.type.object.module.tsx",
        ],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] JSON Constants",
        scope: ["constant.language.json"],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Object Constants",
        scope: [
          "variable.other.constant.object.js",
          "variable.other.constant.object.jsx",
          "variable.other.constant.object.ts",
          "variable.other.constant.object.tsx",
        ],
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Properties Keyword",
        scope: [
          "storage.type.property.js",
          "storage.type.property.jsx",
          "storage.type.property.ts",
          "storage.type.property.tsx",
        ],
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Single Quote Inside Templated String",
        scope: [
          "meta.template.expression.js string.quoted punctuation.definition",
          "meta.template.expression.jsx string.quoted punctuation.definition",
          "meta.template.expression.ts string.quoted punctuation.definition",
          "meta.template.expression.tsx string.quoted punctuation.definition",
        ],
        settings: { foreground: "#98C379" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Backtick inside Templated String",
        scope: [
          "meta.template.expression.js string.template punctuation.definition.string.template",
          "meta.template.expression.jsx string.template punctuation.definition.string.template",
          "meta.template.expression.ts string.template punctuation.definition.string.template",
          "meta.template.expression.tsx string.template punctuation.definition.string.template",
        ],
        settings: { foreground: "#98C379" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS In Keyword for Loops",
        scope: [
          "keyword.operator.expression.in.js",
          "keyword.operator.expression.in.jsx",
          "keyword.operator.expression.in.ts",
          "keyword.operator.expression.in.tsx",
        ],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Variable Other Object",
        scope: ["variable.other.object.js", "variable.other.object.ts"],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] JS/TS Meta Object Literal Key",
        scope: ["meta.object-literal.key.js", "meta.object-literal.key.ts"],
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] Python Constants Other",
        scope: "source.python constant.other",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Python Constants",
        scope: "source.python constant",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Python Placeholder Character",
        scope: "constant.character.format.placeholder.other.python storage",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Python Magic",
        scope: "support.variable.magic.python",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] Python Meta Function Parameters",
        scope: "meta.function.parameters.python",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Python Function Separator Annotation",
        scope: "punctuation.separator.annotation.python",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Python Function Separator Punctuation",
        scope: "punctuation.separator.parameters.python",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] CSharp Fields",
        scope: "entity.name.variable.field.cs",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] CSharp Keyword Operators",
        scope: "source.cs keyword.operator",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] CSharp Variables",
        scope: "variable.other.readwrite.cs",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] CSharp Variables Other",
        scope: "variable.other.object.cs",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] CSharp Property Other",
        scope: "variable.other.object.property.cs",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] CSharp Property",
        scope: "entity.name.variable.property.cs",
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "[VSCODE-CUSTOM] CSharp Storage Type",
        scope: "storage.type.cs",
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "[VSCODE-CUSTOM] Rust Unsafe Keyword",
        scope: "keyword.other.unsafe.rust",
        settings: { foreground: "#C678DD" },
      },
      {
        name: "[VSCODE-CUSTOM] Rust Entity Name Type",
        scope: "entity.name.type.rust",
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] Rust Storage Modifier Lifetime",
        scope: "storage.modifier.lifetime.rust",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Rust Entity Name Lifetime",
        scope: "entity.name.lifetime.rust",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Rust Storage Type Core",
        scope: "storage.type.core.rust",
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] Rust Meta Attribute",
        scope: "meta.attribute.rust",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Rust Storage Class Std",
        scope: "storage.class.std.rust",
        settings: { foreground: "#56B6C2" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Raw Block",
        scope: "markup.raw.block.markdown",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Shell Variables Punctuation Definition",
        scope: "punctuation.definition.variable.shell",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] Css Support Constant Value",
        scope: "support.constant.property-value.css",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Css Punctuation Definition Constant",
        scope: "punctuation.definition.constant.css",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Sass Punctuation for key-value",
        scope: "punctuation.separator.key-value.scss",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] Sass Punctuation for constants",
        scope: "punctuation.definition.constant.scss",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Sass Punctuation for key-value",
        scope: "meta.property-list.scss punctuation.separator.key-value.scss",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Java Storage Type Primitive Array",
        scope: "storage.type.primitive.array.java",
        settings: { foreground: "#E5C07B" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown headings",
        scope: "entity.name.section.markdown",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
        scope: "punctuation.definition.heading.markdown",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown heading setext",
        scope: "markup.heading.setext",
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
        scope: "punctuation.definition.bold.markdown",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Inline Raw",
        scope: "markup.inline.raw.markdown",
        settings: { foreground: "#98C379" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
        scope: "beginning.punctuation.definition.list.markdown",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Quote",
        scope: "markup.quote.markdown",
        settings: { foreground: `${colors[8].hex()}b0`, fontStyle: "italic" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
        scope: [
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "punctuation.definition.metadata.markdown",
        ],
        settings: { foreground: "#ABB2BF" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
        scope: "punctuation.definition.metadata.markdown",
        settings: { foreground: "#C678DD" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
        scope: [
          "markup.underline.link.markdown",
          "markup.underline.link.image.markdown",
        ],
        settings: { foreground: "#C678DD" },
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
        scope: [
          "string.other.link.title.markdown",
          "string.other.link.description.markdown",
        ],
        settings: { foreground: "#61AFEF" },
      },
      {
        name: "[VSCODE-CUSTOM] Ruby Punctuation Separator Variable",
        scope: "punctuation.separator.variable.ruby",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] Ruby Other Constant Variable",
        scope: "variable.other.constant.ruby",
        settings: { foreground: "#D19A66" },
      },
      {
        name: "[VSCODE-CUSTOM] Ruby Keyword Operator Other",
        scope: "keyword.operator.other.ruby",
        settings: { foreground: "#98C379" },
      },
      {
        name: "[VSCODE-CUSTOM] PHP Punctuation Variable Definition",
        scope: "punctuation.definition.variable.php",
        settings: { foreground: "#E06C75" },
      },
      {
        name: "[VSCODE-CUSTOM] PHP Meta Class",
        scope: "meta.class.php",
        settings: { foreground: "#ABB2BF" },
      },
    ]
    : [
      {
        settings: {
          background: colors[0].hex(),
          foreground: colors[7].hex(),
        },
      },
      {
        name: "Comment",
        scope: ["comment"],
        settings: {
          fontStyle: "italic",
          foreground: `${colors[8].hex()}b0`,
        },
      },

      {
        name: "String",
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: colors[10].hex(),
        },
      },
      {
        name: "Regular Expressions and Escape Characters",
        scope: ["string.regexp", "constant.character", "constant.other"],
        settings: {
          foreground: colors[14].hex(),
        },
      },

      {
        name: "Number",
        scope: ["constant.numeric"],
        settings: {
          foreground: colors[5].hex(),
        },
      },
      {
        name: "Built-in constants",
        scope: ["constant.language"],
        settings: {
          foreground: colors[1].hex(),
        },
      },

      {
        name: "Variable",
        scope: ["variable"],
        settings: {
          foreground: colors[7].hex(),
        },
      },
      {
        name: "Member Variable",
        scope: ["variable.member"],
        settings: {
          foreground: colors[1].hex(),
        },
      },
      {
        name: "Language variable",
        scope: ["variable.language"],
        settings: {
          fontStyle: "italic",
          foreground: colors[2].hex(),
        },
      },

      // ------
      // Keywords
      {
        name: "Storage",
        scope: ["storage"],
        settings: {
          foreground: colors[14].hex(),
        },
      },
      {
        name: "type",
        scope: ["storage.modifier"],
        settings: {
          foreground: colors[11].hex(),
        },
      },
      {
        name: "type",
        scope: ["meta.specification.type.fortran"],
        settings: {
          foreground: colors[15].hex(),
        },
      },
      {
        name: "Keyword",
        scope: ["keyword"],
        settings: {
          foreground: colors[1].hex(),
        },
      },

      // ------
      // Operators
      {
        name: "Operators",
        scope: ["keyword.operator", "keyword.other", "keyword.control", "keyword.logical"],
        settings: {
          foreground: colors[11].hex(),
        },
      },

      // ------
      // Punctuation
      {
        name: "Separators like ; or ,",
        scope: ["punctuation.separator", "punctuation.terminator"],
        settings: {
          foreground: `${colors[7].hex()}b0`,
        },
      },
      {
        name: "Punctuation",
        scope: ["punctuation.section"],
        settings: {
          foreground: colors[7].hex(),
        },
      },
      {
        name: "Accessor",
        scope: ["punctuation.accessor"],
        settings: {
          foreground: colors[3].hex(),
        },
      },

      // ------
      // Types
      {
        name: "Types fixes",
        scope: [
          "source.java storage.type",
          "source.haskell storage.type",
          "source.c storage.type",
        ],
        settings: {
          foreground: colors[12].hex(),
        },
      },
      {
        name: "Inherited class type",
        scope: ["entity.other.inherited-class"],
        settings: {
          foreground: colors[2].hex(),
        },
      },
      // Fixes
      {
        name: "Lambda arrow",
        scope: ["storage.type.function"],
        settings: {
          foreground: colors[14].hex(),
        },
      },
      {
        name: "Java primitive variable types",
        scope: ["source.java storage.type.primitive"],
        settings: {
          foreground: colors[2].hex(),
        },
      },

      // ------
      // Function/method names in definitions
      // and calls
      {
        name: "Function name",
        scope: ["entity.name.function"],
        settings: {
          foreground: colors[13].hex(),
        },
      },
      {
        name: "Function arguments",
        scope: ["variable.parameter"],
        settings: {
          foreground: colors[15].hex(),
        },
      },
      {
        name: "Function arguments",
        scope: ["meta.parameter"],
        settings: {
          foreground: colors[15].hex(),
        },
      },
      {
        name: "Function call",
        scope: [
          "variable.function",
          "variable.annotation",
          "meta.function-call.generic",
          "support.function.go",
        ],
        settings: {
          foreground: colors[11].hex(),
        },
      },
      {
        name: "Library function",
        scope: ["support.function", "support.macro"],
        settings: {
          foreground: colors[5].hex(),
        },
      },

      // ------
      // Import/export paths
      {
        name: "Imports and packages",
        scope: ["entity.name.import", "entity.name.package"],
        settings: {
          foreground: colors[10].hex(),
        },
      },
      {
        name: "Entity name",
        scope: ["entity.name"],
        settings: {
          foreground: colors[13].hex(),
        },
      },

      // Tag and their attributes
      {
        name: "Tag",
        scope: ["entity.name.tag", "meta.tag.sgml"],
        settings: {
          foreground: colors[2].hex(),
        },
      },
      {
        name: "Tag start/end",
        scope: [
          "punctuation.definition.tag.end",
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag",
        ],
        settings: {
          foreground: `${colors[2].hex()}77`,
        },
      },
      {
        name: "Tag attribute",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: colors[11].hex(),
        },
      },

      {
        name: "Library constant",
        scope: ["support.constant"],
        settings: {
          fontStyle: "italic",
          foreground: colors[3].hex(),
        },
      },
      {
        name: "Library class/type",
        scope: ["support.type", "support.class", "source.go storage.type"],
        settings: {
          foreground: colors[2].hex(),
        },
      },
      {
        name: "Decorators/annotation",
        scope: [
          "meta.decorator variable.other",
          "meta.decorator punctuation.decorator",
          "storage.type.annotation",
        ],
        settings: {
          foreground: colors[13].hex(),
        },
      },
      {
        name: "Invalid",
        scope: ["invalid"],
        settings: {
          foreground: colors[4].hex(),
        },
      },
      {
        name: "diff.header",
        scope: ["meta.diff", "meta.diff.header"],
        settings: {
          foreground: colors[13].hex(),
        },
      },
      {
        name: "Ruby class methods",
        scope: ["source.ruby variable.other.readwrite"],
        settings: {
          foreground: colors[11].hex(),
        },
      },
      {
        name: "CSS tag names",
        scope: [
          "source.css entity.name.tag",
          "source.sass entity.name.tag",
          "source.scss entity.name.tag",
          "source.less entity.name.tag",
          "source.stylus entity.name.tag",
        ],
        settings: {
          foreground: colors[12].hex(),
        },
      },
      {
        name: "CSS browser prefix",
        scope: [
          "source.css support.type",
          "source.sass support.type",
          "source.scss support.type",
          "source.less support.type",
          "source.stylus support.type",
        ],
        settings: {
          foreground: `${colors[8].hex()}b0`,
        },
      },
      {
        name: "CSS Properties",
        scope: ["support.type.property-name"],
        settings: {
          fontStyle: "normal",
          foreground: colors[2].hex(),
        },
      },
      {
        name: "Search Results Nums",
        scope: ["constant.numeric.line-number.find-in-files - match"],
        settings: {
          foreground: `${colors[8].hex()}b0`,
        },
      },
      {
        name: "Search Results Match Nums",
        scope: ["constant.numeric.line-number.match"],
        settings: {
          foreground: colors[14].hex(),
        },
      },
      {
        name: "Search Results Lines",
        scope: ["entity.name.filename.find-in-files"],
        settings: {
          foreground: colors[10].hex(),
        },
      },
      {
        scope: ["message.error"],
        settings: {
          foreground: colors[4].hex(),
        },
      },
      {
        name: "Markup heading",
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: colors[10].hex(),
        },
      },
      {
        name: "Markup links",
        scope: ["markup.underline.link", "string.other.link"],
        settings: {
          foreground: colors[2].hex(),
        },
      },
      {
        name: "Markup Italic",
        scope: ["markup.italic"],
        settings: {
          fontStyle: "italic",
          foreground: colors[1].hex(),
        },
      },
      {
        name: "Markup Bold",
        scope: ["markup.bold"],
        settings: {
          fontStyle: "bold",
          foreground: colors[1].hex(),
        },
      },
      {
        name: "Markup Bold/italic",
        scope: ["markup.italic markup.bold", "markup.bold markup.italic"],
        settings: {
          fontStyle: "bold italic",
        },
      },
      {
        name: "Markup Code",
        scope: ["markup.raw"],
        settings: {
          background: `${colors[7].hex()}06`,
        },
      },
      {
        name: "Markup Code Inline",
        scope: ["markup.raw.inline"],
        settings: {
          background: `${colors[7].hex()}10`,
        },
      },
      {
        name: "Markdown Separator",
        scope: ["meta.separator"],
        settings: {
          fontStyle: "bold",
          background: `${colors[7].hex()}10`,
          foreground: `${colors[8].hex()}b0`,
        },
      },
      {
        name: "Markup Blockquote",
        scope: ["markup.quote"],
        settings: {
          foreground: colors[14].hex(),
          fontStyle: "italic",
        },
      },
      {
        name: "Markup List Bullet",
        scope: ["markup.list punctuation.definition.list.begin"],
        settings: {
          foreground: colors[11].hex(),
        },
      },
      {
        name: "Markup added",
        scope: ["markup.inserted"],
        settings: {
          foreground: colors[2].hex(),
        },
      },
      {
        name: "Markup modified",
        scope: ["markup.changed"],
        settings: {
          foreground: colors[3].hex(),
        },
      },
      {
        name: "Markup removed",
        scope: ["markup.deleted"],
        settings: {
          foreground: colors[4].hex(),
        },
      },
      {
        name: "Markup Strike",
        scope: ["markup.strike"],
        settings: {
          foreground: colors[13].hex(),
        },
      },
      {
        name: "Markup Table",
        scope: ["markup.table"],
        settings: {
          background: `${colors[7].hex()}10`,
          foreground: colors[2].hex(),
        },
      },
      {
        name: "Markup Raw Inline",
        scope: ["text.html.markdown markup.inline.raw"],
        settings: {
          foreground: colors[3].hex(),
        },
      },
      {
        name: "Markdown - Line Break",
        scope: ["text.html.markdown meta.dummy.line-break"],
        settings: {
          background: `${colors[8].hex()}b0`,
          foreground: `${colors[8].hex()}b0`,
        },
      },
      {
        name: "Markdown - Raw Block Fenced",
        scope: ["punctuation.definition.markdown"],
        settings: {
          background: colors[7].hex(),
          foreground: `${colors[8].hex()}b0`,
        },
      },
    ],
});
