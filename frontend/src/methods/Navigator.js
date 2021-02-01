export default class Navigator {
    /**
     * Display a listing of the resource.
     * 
     * @param {Void}
     *
     * @return {Array}
     */
    index() {
        return [
            { el: `home`, icon: `fa fa-home`, title: `Home`, to: `/`, info: `Home` },
            { el: `user`, icon: `fa fa-users`, title: `User`, to: `/users`, info: `User Info` }
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param {String} search 
     * 
     * @return {Object}
     */
    get(search) {
        return this.index().find(el => el.el === search);
    }
}