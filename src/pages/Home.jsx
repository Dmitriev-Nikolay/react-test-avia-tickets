import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { axiosTickets } from '../store/actions/tickets';

import { Ticket, Filters } from '../components';

// const nameCategories = ['Мясные', 'Экзотические', 'Куриные', 'Сырные', 'Рыбные'];
// const nameSort = [
//     { name: 'популярности', type: 'rating' },
//     { name: 'цене', type: 'price' },
//     { name: 'алфавиту', type: 'name' },
// ];

const Home = React.memo(() => {
    const { isLoaded, tickets } = useSelector(state => { // mapState
        return {
            isLoaded: state.ticketsReducer.isLoaded,
            tickets: state.ticketsReducer.items,
        };
    });
console.log(tickets);
    const dispatch = useDispatch(); // mapActions

    React.useEffect(() => {
        dispatch(axiosTickets());
    }, [dispatch]);

    // const onSelectCategory = React.useCallback((i) => {
    //     dispatch(setCategory(i));
    // }, [dispatch]);

    // const onSelectSort = React.useCallback((typeSort) => {
    //     dispatch(setSort(typeSort));
    // }, [dispatch]);

    // const addItemToCart = React.useCallback((burgerObj) => {
    //     dispatch(addBurgerToCart(burgerObj));
    // }, [dispatch]);

    return (
        <div className="container">
            <div className="content__filters">
                <Filters />
                {/* <Categories
                    activeCategory={ category }
                    burgerCategories={ nameCategories }
                    onClickCategory={ onSelectCategory }
                />
                <SortPopUp 
                    sortCategories={ nameSort }
                    activeSort={ sortBy }
                    onClickSort={ onSelectSort }
                /> */}
            </div>
            <div className="content__tickets">
                <Ticket />
                {/* {
                    isLoaded
                        ? burgers.map((burger, i) => {
                            return (
                                <BurgerCard
                                    key={ `${ burger.id }_${ i }` }
                                    { ...burger }
                                    burgerCountInСart={ 
                                        Object.values(cartItems).flat(1).filter(el => el.id === burger.id).length 
                                        ? Object.values(cartItems).flat(1).filter(el => el.id === burger.id).length 
                                        : null
                                    }
                                    onClickAddBurger={ addItemToCart }
                                />
                            )
                        })
                        : Array.from(Array(12), (_, i) => <BurgerCardLoading key={ i } />)
                } */}
            </div>
        </div>
    );
});

export default Home;