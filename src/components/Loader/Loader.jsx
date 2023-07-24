import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        wrapperClass=""
        wrapperStyle={{}}
        ariaLabel="magnifying-glass-loading"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
