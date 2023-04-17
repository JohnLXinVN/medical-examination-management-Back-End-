
import db from '../models/index'

export const getHomePage = async (req, res) => {
    
    try {
        let data = await db.User.findAll()
        console.log("---------------------------")
        console.log(data)
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
        
    } catch (error) {
        console.log(e)
    }
}