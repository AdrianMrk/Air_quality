import * as React from "react";

export class Seeker extends React.Component {

    state = {
        posts: "Tu coś będzie",
        currentlanguage: null,
      };

    render() {

        const posts = this.state.posts;
 
        return (
            <div>
                {posts}
            </div>
        );
      }

}
export default Seeker;