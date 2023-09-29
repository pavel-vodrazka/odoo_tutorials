import { registry } from "@web/core/registry";
import { ClickerModel } from "./clicker_model";

const clickerService = {
    dependencies: ["notification"],
    start(env, services) {
        const clickerModel = new ClickerModel();
        const bus = clickerModel.bus;
        bus.addEventListener("MILESTONE_1k", () => {
            services.notification.add("Milestone reached! You can now buy clickbots", { sticky: true });
        });
        return clickerModel;
    },
};

registry.category("services").add("awesome_clicker.clicker", clickerService);
