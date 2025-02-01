exports.InputsPage = class InputsPage {
    constructor (page) {
        this.page = page;
        this.fullName =  page.getByPlaceholder('Enter first & last name');
        this.appendText = page.locator('#join');
        this.textBoxContent = page.locator('#getMe');
        this.clearText = page.locator('#clearMe');
        this.disabledField = page.locator('#noEdit');
        this.readOnlyField = page.locator('#dontwrite');
    }

    async enterFullName (fullName) {
        this.fullName.fill(fullName);
    }
        
    async appendTextAndTab(appendedText){
            const initialText = await this.appendText.inputValue();
            await this.appendText.fill(initialText + appendedText);
            await this.page.keyboard.press('Tab');
    }
    
    async getTextBoxContent(){
            const textBoxText = await this.textBoxContent.inputValue();
            return textBoxText;
    }

    async clearTextBox(){
            const clearField = await this.clearText.clear();
            return clearField;
    }

    async confirmDisabled(){
        return this.disabledField;
    }
 
    async confirmReadOnly(){
        return this.readOnlyField;
    }
            //await expect(textLocator).not.toBeEditable();
};
