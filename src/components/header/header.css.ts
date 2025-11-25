import { globalStyle, style } from "@vanilla-extract/css";
import { zIndex } from "@/constants/zIndex";

export const header = style({
	position: "fixed",
	display: "flex",
	justifyContent: "center",
	width: "100%",
	paddingTop: "0.75rem",
	paddingBottom: "0.75rem",
	zIndex: zIndex.header,
	backdropFilter: "blur(12px)",
});

export const container = style({
	display: "flex",
	alignItems: "center",
	width: "95%",
	"@media": {
		"screen and (min-width: 768px)": {
			width: "80%",
		},
	},
});

export const logoContainer = style({
	flexGrow: 1,
});

export const navContainer = style({
	flexGrow: 1,
	display: "none",
	marginTop: "1rem",
	"@media": {
		"screen and (min-width: 768px)": {
			display: "flex",
			justifyContent: "center",
			width: "auto",
			marginTop: 0,
		},
	},
});

export const navLink = style({
	position: "relative",
	fontSize: "1.125rem",
	cursor: "pointer",
	textDecoration: "none",
	color: "inherit",
});

export const underline = style({
	position: "absolute",
	bottom: "-1px",
	left: "15%",
	height: "1px",
	width: "75%",
	backgroundColor: "currentColor",
	transformOrigin: "right",
	transform: "scaleX(0)",
	transition: "transform 300ms ease-in-out",
});

globalStyle(`${navLink}:hover ${underline}`, {
	transform: "scaleX(1)",
	transformOrigin: "left",
});

export const separator = style({
	marginLeft: "0.75rem",
	marginRight: "0.75rem",
});

export const actionsContainer = style({
	flexGrow: 1,
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",
	marginRight: "0.5rem",
});

export const iconLink = style({
	width: "2.5rem",
	height: "2.5rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginRight: "0.25rem",
	":hover": {
		opacity: 0.8,
	},
});

export const githubIconLink = style([
	iconLink,
	{
		marginRight: "0.5rem",
	},
]);

export const mobileMenuContainer = style({
	display: "inline-block",
	marginLeft: "1.25rem",
	position: "relative",
	"@media": {
		"screen and (min-width: 768px)": {
			display: "none",
		},
	},
});

export const menuButton = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	backgroundColor: "transparent",
	color: "currentColor",
	margin: "0.25rem",
	border: "none",
	padding: "0.75rem",
	borderRadius: "0.5rem",
	transition: "background-color 0.2s",
	":hover": {
		backgroundColor: "rgba(0, 0, 0, 0.05)",
	},
});

export const menuContent = style({
	position: "absolute",
	right: 0,
	top: "100%",
	zIndex: zIndex.menuContent,
	width: "13rem",
	padding: "0.5rem",
	marginTop: "0.5rem",
	boxShadow:
		"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
	borderRadius: "1rem",
	backgroundColor: "#ffffff",
	visibility: "hidden",
	opacity: 0,
	transform: "scale(0.95)",
	transformOrigin: "top right",
	transition: "transform 0.2s, opacity 0.2s, visibility 0.2s",
	selectors: {
		[`${mobileMenuContainer}:focus-within &`]: {
			visibility: "visible",
			opacity: 1,
			transform: "scale(1)",
		},
	},
});

export const menuList = style({
	listStyle: "none",
	padding: 0,
	margin: 0,
	display: "flex",
	flexDirection: "column",
});

export const menuItem = style({
	marginBottom: "0.25rem",
});

export const menuLink = style({
	display: "block",
	padding: "0.5rem 1rem",
	borderRadius: "0.5rem",
	textDecoration: "none",
	color: "inherit",
	transition: "background-color 0.2s",
	":hover": {
		backgroundColor: "rgba(0, 0, 0, 0.05)",
	},
});
