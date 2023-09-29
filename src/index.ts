import pageLoad from './page-load';
import { menuRender, menuPopulate } from './menu';
import './style.css';

const pageNodeList = pageLoad();
const menuNode = menuRender();

pageNodeList[3].appendChild(menuNode);

const menuDescriptions = menuPopulate();

console.log(pageNodeList[3]);

// page[3].removeChild(page[4]);
