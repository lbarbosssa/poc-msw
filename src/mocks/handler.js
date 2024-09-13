import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("/api/cards", ({ request }) => {
        const url = new URL(request.url);
        const qnt = Number(url.searchParams.get("qnt")) || 1;
        const cards = Array.from({ length: qnt }, () => ({
            id: faker.number.int(),
            name: faker.person.fullName(),
            description: faker.lorem.sentence(5),
            avatar: faker.image.avatarGitHub(),
        }));

        return HttpResponse.json(cards);
    }),
];
