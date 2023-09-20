/** @type {import('next').NextConfig} */
const nextConfig = {
   
    images: {
        remotePatterns: [
          {
           
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig


//specific domains
 // images:{
    //      domains:[
    //         // "i.annihil.us",
    //         // "cdn.marvel.com",
    //         // "res.cloudinary.com",
    //         // "scontent.fmaa1-1.fna.fbcdn.net"
    //         // "**"
    //      ]
    // }