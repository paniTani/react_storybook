import React, { Component } from 'react';
import styles from '../../index.css';
// import ImagePath from '../../assets/images/';

// const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
// const Wrapper = styled.div`
//     padding: 30px;
// `;

class AllIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          id: 1,
          name: 'icon-smile',
        }
      ],
    }
  }
  componentDidMount() {
    console.log('images', this.state.images);
    console.log('styles', styles);
  }
  render() {
    return (
      <div>
        111{/*{this.state.images.map((item, index) => {
          <p key={item.id}>
            { item.name }
          </p>
        })
        }*/}
      </div>
    )
  }
};

export default AllIcons;
