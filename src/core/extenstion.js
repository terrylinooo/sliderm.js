import pagination from '../components/paginiation';
import spinner from '../components/spinner';
import arrow from '../components/arrow';
import transition from './modules/transition';
import breakpoint from './modules/breakpoint';
import trasnform from './modules/transform';
import autoplay from './modules/autoplay';
import grouping from './modules/grouping';
import columns from './modules/columns';
import preview from './modules/preview';
import spacing from './modules/spacing';
import clone from './modules/clone';
import align from './modules/align';
import touch from './modules/touch';
import move from './modules/slide';
import loop from './modules/loop';
import init from './modules/init';

export const modules = [
  breakpoint,
  transition,
  trasnform,
  autoplay,
  grouping,
  columns,
  preview,
  spacing,
  align,
  touch,
  clone,
  move,
  loop,
  init,
];

export const components = [pagination, spinner, arrow];
