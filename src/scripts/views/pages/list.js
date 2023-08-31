import RestaurantsSource from '../../data/restaurants-source';

const List = {
  async render() {
    return `
        <h2>List Page</h2>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.listRestaurants();
    console.log(restaurants);
  },
};

export default List;
