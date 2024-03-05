import './HomePage.scss';
import gghero from '../../assets/GG-Hero-2.0.png';

export default function HomePage() {
  return(
    <main>
      <div className='row m-0' id='gg-hero-container'>
        <img id='gg-hero' src={gghero} alt='Grocery bag displaying join here' />
      </div>
      <div className='container p-5'>
        <h2>More Content Goes Here</h2>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim porttitor elit in cursus. Donec massa est, ultricies vitae semper dictum, euismod eget leo. Phasellus tincidunt eget ex eget ornare. Fusce condimentum velit non felis blandit lacinia. Donec tincidunt auctor turpis eu eleifend. Integer imperdiet convallis posuere. Sed tempor tortor quam, sit amet interdum purus molestie sed. Aliquam eget erat eget mauris suscipit efficitur. Praesent pellentesque tincidunt magna, a ultrices metus porta nec. Quisque posuere hendrerit sapien nec commodo. In rutrum nec libero a venenatis. Mauris molestie ligula id nibh aliquam, et lobortis massa semper. Etiam venenatis accumsan tortor, vitae mollis nisl suscipit sit amet. Ut turpis neque, placerat vitae elit eget, auctor luctus libero. Nulla consectetur mi eu arcu egestas laoreet.</div>
      </div>
      <div className='container p-5'>
        <h2>More Content Goes Here</h2>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim porttitor elit in cursus. Donec massa est, ultricies vitae semper dictum, euismod eget leo. Phasellus tincidunt eget ex eget ornare. Fusce condimentum velit non felis blandit lacinia. Donec tincidunt auctor turpis eu eleifend. Integer imperdiet convallis posuere. Sed tempor tortor quam, sit amet interdum purus molestie sed. Aliquam eget erat eget mauris suscipit efficitur. Praesent pellentesque tincidunt magna, a ultrices metus porta nec. Quisque posuere hendrerit sapien nec commodo. In rutrum nec libero a venenatis. Mauris molestie ligula id nibh aliquam, et lobortis massa semper. Etiam venenatis accumsan tortor, vitae mollis nisl suscipit sit amet. Ut turpis neque, placerat vitae elit eget, auctor luctus libero. Nulla consectetur mi eu arcu egestas laoreet.</div>
      </div>
    </main>
  )
}