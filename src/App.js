import categories from './components/category-menu/category-menu-items.json';
import Directory from './components/directory-container/directory-container.component';
const App = () => {
  return (
    <Directory categories = {categories}/>
  );
}

export default App;
