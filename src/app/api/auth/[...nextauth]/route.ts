import userModel from "@/models/User"
import connect from "@/utils/db"
import NextAuth from "next-auth"
import CredentialProvider from 'next-auth/providers/credentials'
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({


    providers: [
        // CredentialProvider({
        //     id: "credentials",
        //     name:"Credentials",
        //     async authorize(credentials) {
        //         await connect()

        //         try {
        //             const user = await userModel.findOne({ email:credentials.email })
        //             console.log(user);
                        

        //             if (user) {
        //                 const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        //                 if (isPasswordCorrect) {
            
        //                     return { name:"sakthi"}
        //                 }
        //                 else {
        //                     throw new Error("wrong creadentials")
        //                 } 
        //             }
        //             else {
        //                 throw new Error("user not found")

        //             }

        //         }
        //         catch (err) {

        //           console.log( err);
                  
        //         }

        //     }
        // })
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    pages: {
        error: "/dashboard/login"
    }
})


export { handler as GET, handler as POST }