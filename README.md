# shared-libs
NPM libraries to share across microservices

## Folder Structure

```
shared-libs/
├── src/
│   ├── dtos/
│   │   └── login.dto.ts
│   ├── interfaces/
│   │   └── user.interface.ts
│   ├── enums/
│   │   └── role.enum.ts
│   ├── utils/
│   │   └── string.helper.ts
│   ├── decorators/
│   │   └── public.decorator.ts
│   ├── index.ts
├── dist/                   # Output after build
├── package.json
├── tsconfig.json
└── .github/workflows/
    ├── publish.yml
    └── auto-version.yml
```