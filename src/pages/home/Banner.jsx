import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 shadow-lg rounded-lg p-10" style={{
      background: 'linear-gradient(to right, #c5c9bb, #f3f1e9)', // Change colors as needed
  }}>
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="Banner" className="rounded-lg" />
      </div>
      
      <div className="md:w-1/2 w-full">
      <h1
          className="md:text-8xl text-4xl font-black mb-5"
          style={{ color: '#0D0842', fontFamily: 'BrushHeats' }}
        >
          Welcome to Book Haven!
        </h1>
        <p className="mb-10 font-medium text-black-700">We're delighted to have you here! Dive into our vast collection of books, ranging from thrilling novels to enlightening fiction. Whether you're a lifelong reader or just starting your literary journey, we have something for everyone.</p>
      </div>
    </div>
  )
}

export default Banner
