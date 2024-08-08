import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: [],
        itemCounts: {},
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(cartItem => cartItem.card.info.id === item.card.info.id);
            if (!existingItem) {
                state.items.push(item);
            }
            state.itemCounts[item.card.info.id] = (state.itemCounts[item.card.info.id] || 0) + 1;
        },
        removeItem: (state, action) => {
            const itemId = action.payload.card.info.id;
            const itemIndex = state.items.findIndex(item => item.card.info.id === itemId);
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
                if (state.itemCounts[itemId] > 1) {
                    state.itemCounts[itemId]--;
                } else {
                    delete state.itemCounts[itemId];
                }
            }
        },
        clearCart: (state, action) => {
            state.items = [];
            state.itemCounts = {};
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
