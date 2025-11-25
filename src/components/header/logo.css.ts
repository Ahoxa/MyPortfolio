import { style } from "@vanilla-extract/css";

export const link = style({
	fontFamily: '"Cormorant Garamond", serif',
	textDecoration: "none",
	color: "inherit",
});

export const container = style({
	display: "inline-flex",
	alignItems: "center",
	height: "3.5rem",
	lineHeight: "1.25rem",
	marginLeft: "1.25rem",
	cursor: "pointer",
});

export const bracket = style({
	fontSize: "2.25rem",
	transition: "all 300ms ease-in-out",
});

export const leftBracket = style([
	bracket,
	{
		marginRight: "0.25rem",
		selectors: {
			[`${container}:hover &`]: {
				transform: "translateX(-5px)",
			},
		},
	},
]);

export const rightBracket = style([
	bracket,
	{
		marginLeft: "0.25rem",
		selectors: {
			[`${container}:hover &`]: {
				transform: "translateX(5px)",
			},
		},
	},
]);

export const textContainer = style({
	fontWeight: 300,
	fontSize: "1.25rem",
});
