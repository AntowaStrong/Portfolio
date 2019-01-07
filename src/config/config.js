
import InfoComponent from "../components/InfoComponent.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue";
import BackgroundImage from "../assets/background-seven.jpg";

export default {
    background: BackgroundImage,
    menu: [
        {next: null, prev: null, position: 0, active: false, name: 'Инфо'/*'Info'*/, component: InfoComponent},
        {next: null, prev: null, position: 1, active: false, name: 'Проекты'/*'Projects'*/, component: ProjectsComponent},
      ],

    styles: {
        nick: 0,
        skills: 0
    }

 }