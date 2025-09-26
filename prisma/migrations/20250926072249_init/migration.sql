-- CreateTable
CREATE TABLE "public"."NavbarMenu" (
    "Navid" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "NavbarMenu_pkey" PRIMARY KEY ("Navid")
);

-- CreateTable
CREATE TABLE "public"."SubMenu" (
    "NavSubid" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "navbarMenuId" BIGINT NOT NULL,

    CONSTRAINT "SubMenu_pkey" PRIMARY KEY ("NavSubid")
);

-- AddForeignKey
ALTER TABLE "public"."SubMenu" ADD CONSTRAINT "SubMenu_navbarMenuId_fkey" FOREIGN KEY ("navbarMenuId") REFERENCES "public"."NavbarMenu"("Navid") ON DELETE RESTRICT ON UPDATE CASCADE;
