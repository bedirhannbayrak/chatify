import {useSelector, useDispatch } from "react-redux";
import {useFirebaseConnect , isLoaded , isEmpty} from "react-redux-firebase";
import { Menu } from 'semantic-ui-react';
import { setCurrentChannel } from "../../store/actions/channels"


const ChannelList = () => {

    useFirebaseConnect([{path : "channels"}]);
    const channels = useSelector(state => state.firebase.ordered.channels);
    const currentChannel = useSelector(state => state.channels.currentChannel)
    const dispatch = useDispatch();

    const setActivaChannel = channel => {
        // setCurrentChannel(channel) bu şekilde çalışmaz bunu dispatch içine almamız lazım.
        dispatch(setCurrentChannel(channel));
    }

    if(!isLoaded(channels)) {
        return "Loading Channels..";
    };

    if(isEmpty(channels)) {
        return "No channels";
    };

    return (
        <Menu.Menu>
            {
                channels.map(({key,value}) => (
                    <Menu.Item 
                    key={key}
                    name={value?.name}
                    as="a"
                    icon="hashtag"
                    active={currentChannel?.key === key}
                    onClick={() => setActivaChannel({key, ...value})}
                    />
                ))
            }
        </Menu.Menu>
    )
}

export default ChannelList
