import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    return new Promise(function(resolve) {
        function checkState() {
            if (document.readyState !== 'loading') {
                resolve();
            }
        }
        document.addEventListener('readystatechange', checkState);
        checkState();
    });

};