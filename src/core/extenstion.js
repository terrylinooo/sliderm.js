import pagination from '../components/paginiation';
import spinner from '../components/spinner';
import arrow from '../components/arrow';
import transition from './modules/transition';
import trasnform from './modules/transform';
import grouping from './modules/grouping';
import columns from './modules/columns';
import preview from './modules/preview';
import spacing from './modules/spacing';
import clone from './modules/clone';
import align from './modules/align';
import move from './modules/slide';
import loop from './modules/loop';
import init from './modules/init';

export const modules = [
  transition,
  trasnform,
  grouping,
  columns,
  preview,
  spacing,
  align,
  clone,
  move,
  loop,
  init,
];

export const components = [pagination, spinner, arrow];
