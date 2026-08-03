import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/ai-assistant/pages/home/home')
                .then(m => m.AiAssistantHomeComponent)
    }
];
