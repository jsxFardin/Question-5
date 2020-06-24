import { mapState } from 'vuex';
export const TodoMixin = {
    computed: {
        ...mapState(['todos'])
    },
}
