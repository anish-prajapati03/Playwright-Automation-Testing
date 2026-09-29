class LoginPage{
    constructor(page){
        this.page = page;
        this.baseURL = process.env.BASE_URL;
    }
    async open() {
        await this.page.goto(this.baseURL)
}

    

}
module.exports = {LoginPage}