import pagination from '../components/paginiation';
import arrow from '../components/arrow';
import spinner from '../components/spinner';
import move from './modules/slide';
import transition from './modules/transition';
import trasnform from './modules/transform';
import width from './modules/width';
import spacing from './modules/spacing';
import grouping from './modules/grouping';
import clone from './modules/clone';
import align from './modules/align';
import preview from './modules/preview';
import init from './modules/init';

export const modules = [
  move,
  transition,
  trasnform,
  width,
  spacing,
  grouping,
  clone,
  align,
  preview,
  init,
];
export const components = [pagination, arrow, spinner];
