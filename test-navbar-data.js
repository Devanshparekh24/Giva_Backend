import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedNavbarData() {
  try {
    // Clear existing data
    await prisma.subMenuItem.deleteMany();
    await prisma.subMenu.deleteMany();
    await prisma.navbarMenu.deleteMany();

    // Create main menu items with submenus
    const shopByCategory = await prisma.navbarMenu.create({
      data: {
        title: 'Shop by Category',
        subMenus: {
          create: [
            {
              title: 'Rings',
              submenuItems: {
                create: [
                  { title: 'Engagement Rings', link: '/rings/engagement' },
                  { title: 'Wedding Rings', link: '/rings/wedding' },
                  { title: 'Fashion Rings', link: '/rings/fashion' }
                ]
              }
            },
            {
              title: 'Earrings',
              submenuItems: {
                create: [
                  { title: 'Stud Earrings', link: '/earrings/stud' },
                  { title: 'Hoop Earrings', link: '/earrings/hoop' },
                  { title: 'Drop Earrings', link: '/earrings/drop' }
                ]
              }
            },
            {
              title: 'Necklaces',
              submenuItems: {
                create: [
                  { title: 'Chain Necklaces', link: '/necklaces/chain' },
                  { title: 'Pendant Necklaces', link: '/necklaces/pendant' },
                  { title: 'Chokers', link: '/necklaces/chokers' }
                ]
              }
            }
          ]
        }
      }
    });

    const giftStore = await prisma.navbarMenu.create({
      data: {
        title: 'Gift Store',
        subMenus: {
          create: [
            {
              title: 'For Her',
              submenuItems: {
                create: [
                  { title: 'Birthday Gifts', link: '/gifts/her/birthday' },
                  { title: 'Anniversary Gifts', link: '/gifts/her/anniversary' },
                  { title: 'Valentine Gifts', link: '/gifts/her/valentine' }
                ]
              }
            },
            {
              title: 'For Him',
              submenuItems: {
                create: [
                  { title: 'Cufflinks', link: '/gifts/him/cufflinks' },
                  { title: 'Chains', link: '/gifts/him/chains' },
                  { title: 'Bracelets', link: '/gifts/him/bracelets' }
                ]
              }
            }
          ]
        }
      }
    });

    // Create simple menu items without submenus
    await prisma.navbarMenu.create({
      data: {
        title: 'Gold with Lab Diamonds'
      }
    });

    await prisma.navbarMenu.create({
      data: {
        title: 'Rakhi SALE'
      }
    });

    await prisma.navbarMenu.create({
      data: {
        title: 'GIVA Gift Card'
      }
    });

    console.log('✅ Navbar data seeded successfully!');
    console.log('Created menu items:');
    console.log('- Shop by Category (with Rings, Earrings, Necklaces submenus)');
    console.log('- Gift Store (with For Her, For Him submenus)');
    console.log('- Gold with Lab Diamonds');
    console.log('- Rakhi SALE');
    console.log('- GIVA Gift Card');

  } catch (error) {
    console.error('❌ Error seeding navbar data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedNavbarData();
