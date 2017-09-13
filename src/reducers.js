import actions from './actions';

const crewMembers = (state=[], action) => {
    switch (action.type) {
        case actions.ADD_MEMBER:
            return state.concat({
                name: action.name,
                rank: action.rank,
                id: action.id,
                location: action.location
            });
        case actions.BEAM_MEMBER:
            return state.map( (crewMember) => {
                // if the id matches then update the location
                if (action.id === crewMember.id) {
                    return Object.assign(m, {
                        location: 'PLANET_EARTH'
                    })
                } else {
                    return crewMember;
                }
            })
        default:
            return state;
    }
}

export default crewMembers;