-- CreateTable
CREATE TABLE "public"."SubMenuItem" (
    "NavSubItemid" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "subMenuId" BIGINT NOT NULL,

    CONSTRAINT "SubMenuItem_pkey" PRIMARY KEY ("NavSubItemid")
);

-- AddForeignKey
ALTER TABLE "public"."SubMenuItem" ADD CONSTRAINT "SubMenuItem_subMenuId_fkey" FOREIGN KEY ("subMenuId") REFERENCES "public"."SubMenu"("NavSubid") ON DELETE RESTRICT ON UPDATE CASCADE;
