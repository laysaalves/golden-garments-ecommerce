import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const brasileiraoACategory = await prisma.category.create({
      data: {
        name: "Brasileirão A",
        slug: "brasileiraoA",
        imageUrl:
          "https://utfs.io/f/6c683be3-0f3c-4500-9ffd-87c06a2688bf-2kan8q.png",
      },
    });

    const brasileiraoA = [
      {
        name: "Camisa Vasco da Gama Casa 23/24",
        slug: "camisa-vasco-da-gama-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/29c57344-5f69-441b-9959-75b4cfac1769-ka0bae.PNG",
          "https://utfs.io/f/833eb7b0-76e9-4a34-bab3-b52196d0cae4-ka0bad.PNG",
          "https://utfs.io/f/e0311f4f-565e-465e-ac22-1878d952afce-ka0bac.PNG",
          "https://utfs.io/f/6fe95254-138e-497e-96c9-db14d0ec816c-ka0bab.PNG",
        ],
        price: 300,
        categoryId: brasileiraoACategory.id,
        discountPercentage: 0,
      },
      {
        name: "Camisa Palmeiras Visitante 23/24",
        slug: "camisa-palmeiras-visitante-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/426c00f0-1cbe-4716-94f8-307221ec7606-ur7b4w.PNG",
          "https://utfs.io/f/052d8b86-6a0a-4b19-a0aa-9175d795729d-ur7b4x.PNG",
          "https://utfs.io/f/b5351ff5-2565-4d67-975c-667bf9c0edcd-ur7b4y.PNG",
          "https://utfs.io/f/4c99e3f3-06f6-45ca-b5ee-50059ed5faa8-ur7b4z.PNG",
        ],
        price: 300,
        categoryId: brasileiraoACategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Camisa São Paulo Casa 23/24",
        slug: "camisa-sao-paulo-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/c71d2ebc-0bf2-4e95-9c9a-da3b2fa2d4bd-asc89f.PNG",
          "https://utfs.io/f/1267397f-7877-41f8-b4df-cafd9639d58d-asc89g.PNG",
          "https://utfs.io/f/f1fcf5c6-99d5-4254-bb1b-b2f0e0640c6d-asc89h.PNG",
          "https://utfs.io/f/effa37f9-8b95-4ed5-9dd9-12bc842dcc6e-asc89i.PNG",
        ],
        price: 300,
        categoryId: brasileiraoACategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Camisa Botafogo Casa 23/24",
        slug: "camisa-botafogo-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/9a937875-6766-4407-abe8-6eb0688925d2-lki3ab.PNG",
          "https://utfs.io/f/15947387-6181-4cd0-b480-2a21412fbc5b-lki3ac.PNG",
          "https://utfs.io/f/01dc57d2-55b4-4ed1-8e3d-a2f2c29186d2-lki3ad.PNG",
          "https://utfs.io/f/e3c577fb-8101-4c01-a333-e9c5629250f3-lki3ae.PNG",
        ],
        price: 300,
        categoryId: brasileiraoACategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Camisa Athletico Paranaense Casa 23/24",
        slug: "camisa-athletico-paranaense-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/db31cf5e-da15-4e21-9382-a19d78602e11-c6o8tc.PNG",
          "https://utfs.io/f/dd252159-ba10-4347-90b3-087eced61742-c6o8tb.PNG",
          "https://utfs.io/f/3eb5e1f9-b137-4e76-9a8c-58251dc511ec-c6o8ta.PNG",
          "https://utfs.io/f/a3eff285-626e-4415-8760-b0d31ecea259-c6o8t9.PNG",
        ],
        price: 300,
        categoryId: brasileiraoACategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Camisa Grêmio Casa 23/24",
        slug: "camisa-gremio-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/29760954-97a0-45c9-a8b6-66f513d97291-16aehm.PNG",
          "https://utfs.io/f/84c791d1-b430-4e40-9689-940eed8ba132-16aehn.PNG",
          "https://utfs.io/f/37b9aa7e-13d8-483f-a689-bda59d2ff149-16aeho.PNG",
          "https://utfs.io/f/f817274a-b33e-4eb3-b994-3955b3d3ba18-16aehp.PNG",
        ],
        price: 300,
        categoryId: brasileiraoACategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: brasileiraoA,
    });

    const brasileiraoBCategory = await prisma.category.create({
      data: {
        name: "Brasileirão B",
        slug: "brasileiraoB",
        imageUrl:
          "https://utfs.io/f/6fd555ae-7e0b-4e99-959c-bfef2bcc39cc-2kan8r.png",
      },
    });

    const brasileiraoB = [
      {
        name: "Camisa Sport Recife Casa 23/24",
        slug: "camisa-sport-recife-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/0f735fc0-80fa-446f-8290-a98f5d856d9e-uazyti.PNG",
          "https://utfs.io/f/5da434ef-75f4-4afc-b0ab-c6badb71d26d-uazyth.PNG",
          "https://utfs.io/f/d757c8ee-95d2-4059-943a-6b2ed648a203-uazytg.PNG",
          "https://utfs.io/f/b4488638-908e-4da5-b44a-58521a8c4d72-uazytf.PNG",
        ],
        price: 200,
        categoryId: brasileiraoBCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Camisa Ceará Casa 23/24",
        slug: "camisa-ceara-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/a58a6a67-eb8f-4f88-ac6b-5af1b860d42a-k81af4.PNG",
          "https://utfs.io/f/469163b3-b293-415d-82ca-800c48c26b62-k81af3.PNG",
          "https://utfs.io/f/fe11b8a5-5b8c-4c9c-9fbd-8948cbc926fa-k81af2.PNG",
          "https://utfs.io/f/e8eb4916-3cde-4a59-a5d9-2091fd4aa3bc-k81af1.PNG",
        ],
        price: 200,
        categoryId: brasileiraoBCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Camisa Fluminense Casa 23/24",
        slug: "camisa-fluminense-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/df479e77-f192-42a2-858a-9e1c25c4fb1f-tmzfjk.PNG",
          "https://utfs.io/f/f7725f01-1b2f-4719-88c0-8ec038fa8fe8-tmzfjl.PNG",
          "https://utfs.io/f/cb50dc96-db0d-406d-9b16-d6795930f5d0-tmzfjm.PNG",
          "https://utfs.io/f/aea4748a-3f5a-4db1-ba05-4df7d5bb178a-tmzfjn.PNG",
        ],
        price: 200,
        categoryId: brasileiraoACategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Camisa Santos Casa 23/24",
        slug: "camisa-santos-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/676a8652-1048-4722-a332-ca49857cff4f-z13mnq.PNG",
          "https://utfs.io/f/273bd5d3-4593-4238-a644-27388f889a3e-z13mnr.PNG",
          "https://utfs.io/f/38c3a3b8-8cd9-499b-8d34-222bca7b2efa-z13mns.PNG",
          "https://utfs.io/f/a57deb26-c75f-4d29-9be4-d436c5679347-z13mnt.PNG",
        ],
        price: 200,
        categoryId: brasileiraoBCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Camisa Paysandu Casa 23/24",
        slug: "camisa-paysandu-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/90a17e68-f976-4af4-8e45-d8ecb5137486-hhouit.PNG",
          "https://utfs.io/f/b7311e6a-a10f-4962-b96a-128a27b3a308-hhouiu.PNG",
          "https://utfs.io/f/a347a7bd-ac32-4caf-8ed2-86f30eeef910-hhouiv.PNG",
          "https://utfs.io/f/e074a6e8-c09e-4de1-b53d-524975646320-hhouiw.PNG",
        ],
        price: 200,
        categoryId: brasileiraoBCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: brasileiraoB,
    });

    const selecoesCategory = await prisma.category.create({
      data: {
        name: "Seleções",
        slug: "selecoes",
        imageUrl:
          "https://utfs.io/f/921d2eae-9ba7-4dd0-b0f3-ad2b470d308f-jpff8l.png",
      },
    });

    const selecoes = [
      {
        name: "Camisa Bélgica Casa 23/24",
        slug: "camisa-belgica-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/0118ae21-faba-4dc5-9b19-f5dd75a3de9b-krfhmx.PNG",
          "https://utfs.io/f/24d607c0-bf7f-45e6-8624-da14b28b8ca7-krfhmy.PNG",
          "https://utfs.io/f/70396720-2d59-41c1-8e59-dce0ffae80ca-krfhmz.PNG",
          "https://utfs.io/f/d3c27006-59dc-49f7-bdf6-ac1ed9b7ec93-krfhn0.PNG",
        ],
        price: 400,
        categoryId: selecoesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Camisa Argentina Casa 23/24",
        slug: "camisa-argentina-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/854cb21a-05f6-4fa4-a297-420050c49e86-nmw3on.PNG",
          "https://utfs.io/f/433bfda7-f612-4074-9f11-697e4e5c6fea-nmw3oo.PNG",
          "https://utfs.io/f/842188c7-f57f-4213-b823-edc5ad356ce3-nmw3op.PNG",
          "https://utfs.io/f/fcb9b891-81ae-4f5b-ab8e-0b4d5d05c606-nmw3oq.PNG",
        ],
        price: 400,
        categoryId: selecoesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Camisa França Visitante 23/24",
        slug: "camisa-franca-visitante-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/869f8516-8df1-4c03-ad24-32cb033ce7d9-bh9tdn.PNG",
          "https://utfs.io/f/18a5e853-0eea-4f80-9fb5-32348640feb8-bh9tdo.PNG",
          "https://utfs.io/f/40f94f2a-365d-4aab-a982-434c460f4be4-bh9tdp.PNG",
          "https://utfs.io/f/f0a37e55-5947-48ee-937b-9c3a8176b9a7-bh9tdq.PNG",
        ],
        price: 400,
        categoryId: selecoesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Camisa Portugal Casa 23/24",
        slug: "camisa-portugal-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/458891d7-1133-4e3f-b37a-a3a0db4ef336-314r8w.PNG",
          "https://utfs.io/f/acaa9b63-0170-4d9b-bb98-17476ff3ad0c-314r8x.PNG",
          "https://utfs.io/f/921915fb-c18d-415a-a80f-807d94b24ad8-314r8y.PNG",
          "https://utfs.io/f/3c476774-9ee6-4ee2-8173-cda990d40201-314r8z.PNG",
        ],
        price: 400,
        categoryId: selecoesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Camisa Alemanha Visitante 23/24",
        slug: "camisa-alemanha-visitante-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/ce9bffb3-7b15-456b-8fd7-91b90ce4edc1-3k4b9.PNG",
          "https://utfs.io/f/583b4c24-cd23-43e7-a481-d222f32273c1-3k4ba.PNG",
          "https://utfs.io/f/3ea03fac-e6a0-404d-97a2-fa96516f3cfc-3k4bb.PNG",
          "https://utfs.io/f/f1569c6c-dab3-4888-83c8-ca03bc41acce-3k4bc.PNG",
        ],
        price: 400,
        categoryId: selecoesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Camisa Itália Casa 23/24",
        slug: "camisa-italia-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/a0968674-2355-4096-989a-4eedac49e38c-8ioark.PNG",
          "https://utfs.io/f/7633b79a-090c-4063-bbe1-aabcb90113f1-8ioarl.PNG",
          "https://utfs.io/f/11ee4551-cac6-40a4-8b0e-e75a3535cda6-8ioarm.PNG",
          "https://utfs.io/f/fbd0553f-7ae6-4986-8811-ea5bec70e0c2-8ioarn.PNG",
        ],
        price: 400,
        categoryId: selecoesCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: selecoes,
    });

    const premierLeagueCategory = await prisma.category.create({
      data: {
        name: "Premier League",
        slug: "premierLeague",
        imageUrl:
          "https://utfs.io/f/bec10117-44d4-4e77-9bbf-a24a8b58386b-tcp5tn.png",
      },
    });

    const premierLeague = [
      {
        name: "Camisa West Ham Casa 23/24",
        slug: "camisa-west-ham-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/939fa31f-b516-4eaa-a292-286e26b976d3-juivg8.PNG",
          "https://utfs.io/f/3cbfb959-bbaf-42c6-8214-c30d735540b9-juivg9.PNG",
          "https://utfs.io/f/ae90a968-5fad-4650-9030-8581697908a4-juivga.PNG",
          "https://utfs.io/f/e24befc1-5f93-4621-af20-01a036b0a0bc-juivgb.PNG",
        ],
        price: 300,
        categoryId: premierLeagueCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Camisa Wolverhampton Casa 23/24",
        slug: "camisa-wolverhampton-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/17d91ad5-7440-43ab-ad86-0790f1766db0-6aqov2.PNG",
          "https://utfs.io/f/94de9d7c-1cb2-490f-a0e1-61bec1d733a2-6aqov3.PNG",
          "https://utfs.io/f/efcb9747-f78f-4d4a-8c54-e102ec8b4f59-6aqov4.PNG",
          "https://utfs.io/f/d620ee09-d4ff-436b-a708-a68fd7b99e61-6aqov5.PNG",
        ],
        price: 300,
        categoryId: premierLeagueCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Camisa Arsenal Casa 23/24",
        slug: "camisa-arsenal-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/084ba993-017a-4fcb-8812-3fd900219144-8qcjpk.PNG",
          "https://utfs.io/f/4cdf4e42-3b15-4458-8f6e-1d113f5275e4-8qcjpj.PNG",
          "https://utfs.io/f/575310b2-6f6f-461e-803d-c8c144208a23-8qcjpi.PNG",
          "https://utfs.io/f/7891641f-30f2-4736-a614-3162e4e6a671-8qcjph.PNG",
        ],
        price: 300,
        categoryId: premierLeagueCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Camisa Chelsea Casa 23/24",
        slug: "camisa-chelsea-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/c7143261-3ce1-4f3b-99f1-4ac80862b67d-enyn79.PNG",
          "https://utfs.io/f/b9840801-ab5e-46a1-a643-7e2849bf96d7-enyn78.PNG",
          "https://utfs.io/f/b56b4b91-83bd-40e3-afb2-d61155ba8857-enyn77.PNG",
          "https://utfs.io/f/3924ed3a-263e-4e9b-a672-d76e357ae4fe-enyn76.PNG",
        ],
        price: 300,
        categoryId: premierLeagueCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Camisa Tottenham Visitante 23/24",
        slug: "camisa-tottenham-visitante-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/5bdfa1bb-b6c3-4fcf-8556-24ddb237f6d1-irx7vx.PNG",
          "https://utfs.io/f/eec718fc-9d3c-443b-857d-eeff9c71f1db-irx7vw.PNG",
          "https://utfs.io/f/7d8ffed4-bc7b-48a5-bbcf-5ec0798c3078-irx7vv.PNG",
          "https://utfs.io/f/76521d76-3d1f-44f7-be90-e6a44fa98cc4-irx7vu.PNG",
        ],
        price: 300,
        categoryId: premierLeagueCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: premierLeague,
    });

    const laLigaCategory = await prisma.category.create({
      data: {
        name: "La Liga",
        slug: "laLiga",
        imageUrl:
          "https://utfs.io/f/769111bb-6ab4-4bf7-b771-f7a60ac1624f-idi2fo.png",
      },
    });

    const laLiga = [
      {
        name: "Camisa Real Madrid Visitante 23/24",
        slug: "camisa-real-madrid-visitante-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/882106d6-0eef-42a5-af1f-3233df890e26-kjmraa.PNG",
          "https://utfs.io/f/ee93f000-503b-4d7b-b0e0-5325dfa5445e-kjmrab.PNG",
          "https://utfs.io/f/5de9c631-fe66-4a6a-90ab-008dad130486-kjmrac.PNG",
          "https://utfs.io/f/644e9319-de1a-4b93-9356-3f72201475b1-kjmrad.PNG",
        ],
        price: 500,
        categoryId: laLigaCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Camisa Barcelona Casa 23/24",
        slug: "camisa-barcelona-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/9d990e60-ef55-4acd-94ac-749319dcafe8-w2ae8t.PNG",
          "https://utfs.io/f/6f4fb805-abb2-4a17-9026-de420a8826cd-w2ae8s.PNG",
          "https://utfs.io/f/d2491f7f-d2c2-4697-ab9f-ebbd74f10339-w2ae8r.PNG",
          "https://utfs.io/f/4659b917-cf82-4bcd-a744-718b0b5708e1-w2ae8q.PNG",
        ],
        price: 500,
        categoryId: laLigaCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Camisa Sevilla Casa 23/24",
        slug: "camisa-sevilla-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/7738f5d2-b4ff-4c98-83b5-86d2169a19f7-vgg0jy.PNG",
          "https://utfs.io/f/119f0c55-fcc8-400b-be6c-c2aa2b7658ee-vgg0jx.PNG",
          "https://utfs.io/f/eec27185-8e48-4fa2-a2f3-0ebd7122cea6-vgg0jw.PNG",
          "https://utfs.io/f/6d1e4400-9e9c-4075-9f45-9690f70eb06b-vgg0jv.PNG",
        ],
        price: 500,
        categoryId: laLigaCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Camisa Atlético de Madrid Casa 23/24",
        slug: "camisa-atletico-de-madrid-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/34e699ca-871d-41b1-887e-91ddf3f96589-kh1xj3.PNG",
          "https://utfs.io/f/e954ff19-4b48-4a3c-b126-7c839b8220b7-kh1xj2.PNG",
          "https://utfs.io/f/9242df6d-6d47-494b-9034-625ee72283ab-kh1xj1.PNG",
          "https://utfs.io/f/97601ebf-83b2-4a63-b0d3-975b632ccec9-kh1xj0.PNG",
        ],
        price: 500,
        categoryId: laLigaCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Camisa Real Madrid Casa 23/24",
        slug: "camisa-real-madrid-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/1b69f35d-24f7-4c11-9e78-a8ee66a837a5-hvcuj4.PNG",
          "https://utfs.io/f/0da0ce5c-06bd-4e6a-b8bf-882954cacde0-hvcuj5.PNG",
          "https://utfs.io/f/65bfb14f-dbca-4268-8d1a-7ff4755ca3a2-hvcuj6.PNG",
          "https://utfs.io/f/3758bf4b-9007-49c7-b3a4-eaa9ba897666-hvcuj7.PNG",
        ],
        price: 500,
        categoryId: laLigaCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: laLiga,
    });

    const serieACategory = await prisma.category.create({
      data: {
        name: "Série A",
        slug: "serieA",
        imageUrl:
          "https://utfs.io/f/ca71ecfd-787a-4ae1-ab18-dfbc4fb6ec54-klgpcz.png",
      },
    });

    const serieA = [
      {
        name: "Camisa Napoli Especial 24/25",
        slug: "camisa-napoli-especial-24-25",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/fe50bafd-a061-4f67-930a-af6a543d9a92-1nxqht.PNG",
          "https://utfs.io/f/0e413be4-d6a7-4379-99e1-3374e9cc4841-w0w3iq.PNG",
          "https://utfs.io/f/f10914d9-6fa1-4349-9ff5-36bda8219a2c-1nxqhr.PNG",
          "https://utfs.io/f/c2f35b06-2e9d-4f1b-80f5-5b900fdf0c91-1nxqhq.PNG",
        ],
        price: 250,
        categoryId: serieACategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Camisa AC Milan Casa 23/24",
        slug: "camisa-ac-milan-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/58a542c1-71df-4cb1-8603-97114dd19d12-njns1b.PNG",
          "https://utfs.io/f/32deabe3-7217-46f1-9011-5334bc37a106-njns1a.PNG",
          "https://utfs.io/f/d58951eb-ea94-4292-8350-f8259d911d8a-njns19.PNG",
          "https://utfs.io/f/7a6be8ba-609f-44d5-99b3-7f923d0275a6-njns18.PNG",
        ],
        price: 250,
        categoryId: serieACategory.id,
        discountPercentage: 0,
      },
      {
        name: "Camisa Inter de Milão Casa 23/24",
        slug: "camisa-inter-de-milao-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/9977fbee-f50c-4418-8ad0-983a98d37d3d-9fkiaa.PNG",
          "https://utfs.io/f/26c37714-2606-4584-bca5-79c37c2dee3b-9fkiab.PNG",
          "https://utfs.io/f/e74f9438-0493-40eb-b877-28a2e1720519-9fkiac.PNG",
          "https://utfs.io/f/a0b46ea1-36a2-472f-8257-e1e44665cd84-9fkiad.PNG",
        ],
        price: 250,
        categoryId: serieACategory.id,
        discountPercentage: 0,
      },
      {
        name: "Camisa Roma Casa 23/24",
        slug: "camisa-roma-casa-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/d9161977-cb5f-4989-9839-b8dc0902bb1a-ms7kql.PNG",
          "https://utfs.io/f/c85517a5-80c0-489e-9bf7-2cae78e2fd4b-ms7kqm.PNG",
          "https://utfs.io/f/f03dbf32-8ab1-4041-9c2d-88394a9ab55b-ms7kqn.PNG",
          "https://utfs.io/f/b9f09e9c-180c-42f6-9da6-ad64714da783-ms7kqo.PNG",
        ],
        price: 250,
        categoryId: serieACategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Camisa Juventus Visitante 23/24",
        slug: "camisa-juventus-visitante-23-24",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/4a061eb6-dac7-44b8-951e-a1f77e350c87-av70uo.PNG",
          "https://utfs.io/f/181446fa-e337-4b08-84ad-5537306c356c-av70up.PNG",
          "https://utfs.io/f/eb8a243b-c9e5-4184-8dfe-911c7c4ce3e5-av70uq.PNG",
          "https://utfs.io/f/1e8adfff-fe59-4fb9-a317-fd37140b079d-av70ur.PNG",
        ],
        price: 250,
        categoryId: serieACategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: serieA,
    });

    console.log("✅ Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });