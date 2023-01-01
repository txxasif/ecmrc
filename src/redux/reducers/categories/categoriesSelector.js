export const selectCategories = (state)=>
state.products.categories.reduce((acc,data)=>{
    const {items,title} = data;
    acc[title.toLowerCase()] = items;
    return acc;
  },{});