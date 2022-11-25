import categories from '../../components/category-menu/category-menu-items.json';
import Directory from '../../components/directory-container/directory-container.component';
const Home = () => {
  return (
    <div>
        <Directory categories = {categories}/>
    </div>
  );
}

export default Home;
