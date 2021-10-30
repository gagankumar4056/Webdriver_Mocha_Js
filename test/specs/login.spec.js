describe('Login Test', ()=> {
    it('should validate login functionality', async ()=> {

        await browser.url("https://the-internet.herokuapp.com/login");
        expect(await browser.getTitle()).toEqual('The Internet');

        const user= $("#username");
        const password = $("#password");
        const loginbtn = $("//*[@type='submit']");

        const flash = $("#flash");

        await user.setValue('tomsmith');
        await password.setValue('SuperSecretPassword!');
        await loginbtn.click();

        await expect(flash).toHaveTextContaining('You logged into a secure area!');
    
    })
})