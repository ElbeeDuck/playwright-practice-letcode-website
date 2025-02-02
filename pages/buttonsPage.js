exports.ButtonsPage = class ButtonsPage {
    constructor(page) {
        this.gotoHome = page.getByRole('button', { name: 'Goto Home' });
        this.findLocation = page.getByRole('button', { name: 'Find Location' });
        this.whatColor = page.getByLabel('Find the color of the button');
        this.tallAndFat = page.getByRole('button', { name: 'How tall & fat I am?' });
        this.disabledButton = page.getByRole('button', { name: 'Disabled' });
        this.holdButton = page.getByRole('button', { name: 'Button Hold!' });
    }

    async goToHomePage() {
        await this.gotoHome.click();
    }
    async findCoordinates() {
        const coords = await this.findLocation.boundingBox();
        return coords;
    }

    async findButtonColor() {
        await this.whatColor.waitFor({ state: 'visible', timeout: 5000 });
        const color = await this.whatColor.evaluate((element) => getComputedStyle(element).color);
        return color;
    }

    async findButtonBackgroundColor() {
        await this.whatColor.waitFor({ state: 'visible', timeout: 5000 });
        const backgroundColor = await this.whatColor.evaluate((element) => getComputedStyle(element).backgroundColor);
        return backgroundColor;
    }

    async findHeightAndWidthButton() {
        const buttonBox = await this.tallAndFat.boundingBox();
        return buttonBox;
    }

    async isButtonDisabled() {
        const disabled = await this.disabledButton.isDisabled();
        return disabled;
    }

    async clickAndHoldButton() {
        await this.holdButton.click({
            delay: 3000,
        });
    }
}