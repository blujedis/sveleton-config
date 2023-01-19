import type {  shades } from './palette';

export type PaletteColor = Partial<Record<Shade | 'DEFAULT', string>>;

export type PaletteInit = Record<string, string | Partial<PaletteColor>>;

export type PaletteLike = Record<string | number, string | Record<string | number, string>>;

export type Shade = typeof shades[number];

export interface PluginOutput {
	outdir?: string | boolean;
	outname?: string;
	outtype?: 'esm' | 'cjs' | 'json';
	outext?: 'js' | 'cjs' | 'mjs' | 'ts' | 'json';
	output?: boolean;
	outsrc?: boolean;
}

export interface PluginOptions extends PluginOutput {
	dynamic?: boolean; // when true css variables used for theme colors.
	prefix?: 'color';
	colors?: PaletteInit;
}
