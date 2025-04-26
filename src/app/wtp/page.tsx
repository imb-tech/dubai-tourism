import { RentImageSlider } from 'views/rent/rent-page-slider';
import WtpComments from 'views/wtp/wtp-comments';
import WtpFeatures from 'views/wtp/wtp-features';
import WtpForm from 'views/wtp/wtp-form';
import WtpMap from 'views/wtp/wtp-map';
import React from 'react';

export default function wtp() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-8">
        Atlantis Aquaventure Waterpark
      </h1>
      <RentImageSlider images={images} />
      <WtpForm />
      <WtpMap/>

      <WtpFeatures />

      <WtpComments/>

    </div>
  );
}

const images: CarImage[] = [
  {
    id: 1,
    url: 'https://s3-alpha-sig.figma.com/img/028d/53a1/110f07d207d28240dc0ab7fbeb7d4652?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sMxLam~oCr0Za7phr11LvrmFl-vddUAC3nl0X3QWZY19LOHcE8KnzLVOIAtR-vxWjWw15uL-Wi0rYnXfgyuWAEVQdxsgGnblJBQ5BL49MbgMTr03UscQxWNx4Ki4aRm5HWxTbYk8uduGSTi0SFTx8xiznr-rH9fso946U6C9P4uPckJexRtjiIN3r2l3azF0F39pO112ZYgebLOCfvDW9L3ZaFJ5kBRRoApFUJuiGTsWtmnSSJKoWaMY9boSDuAiWfEWdnI-sC51f0iN6hlj1Ssun1f86wf-bkPD6IMT~mANcpddQbJ8vgOpEu1FVtBuZiC1UbCAM6Q9a0edQnf0-g__',
  },
  {
    id: 2,
    url: 'https://s3-alpha-sig.figma.com/img/028d/53a1/110f07d207d28240dc0ab7fbeb7d4652?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sMxLam~oCr0Za7phr11LvrmFl-vddUAC3nl0X3QWZY19LOHcE8KnzLVOIAtR-vxWjWw15uL-Wi0rYnXfgyuWAEVQdxsgGnblJBQ5BL49MbgMTr03UscQxWNx4Ki4aRm5HWxTbYk8uduGSTi0SFTx8xiznr-rH9fso946U6C9P4uPckJexRtjiIN3r2l3azF0F39pO112ZYgebLOCfvDW9L3ZaFJ5kBRRoApFUJuiGTsWtmnSSJKoWaMY9boSDuAiWfEWdnI-sC51f0iN6hlj1Ssun1f86wf-bkPD6IMT~mANcpddQbJ8vgOpEu1FVtBuZiC1UbCAM6Q9a0edQnf0-g__',
  },
  {
    id: 3,
    url: 'https://s3-alpha-sig.figma.com/img/028d/53a1/110f07d207d28240dc0ab7fbeb7d4652?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sMxLam~oCr0Za7phr11LvrmFl-vddUAC3nl0X3QWZY19LOHcE8KnzLVOIAtR-vxWjWw15uL-Wi0rYnXfgyuWAEVQdxsgGnblJBQ5BL49MbgMTr03UscQxWNx4Ki4aRm5HWxTbYk8uduGSTi0SFTx8xiznr-rH9fso946U6C9P4uPckJexRtjiIN3r2l3azF0F39pO112ZYgebLOCfvDW9L3ZaFJ5kBRRoApFUJuiGTsWtmnSSJKoWaMY9boSDuAiWfEWdnI-sC51f0iN6hlj1Ssun1f86wf-bkPD6IMT~mANcpddQbJ8vgOpEu1FVtBuZiC1UbCAM6Q9a0edQnf0-g__',
  },
  {
    id: 4,
    url: 'https://s3-alpha-sig.figma.com/img/028d/53a1/110f07d207d28240dc0ab7fbeb7d4652?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sMxLam~oCr0Za7phr11LvrmFl-vddUAC3nl0X3QWZY19LOHcE8KnzLVOIAtR-vxWjWw15uL-Wi0rYnXfgyuWAEVQdxsgGnblJBQ5BL49MbgMTr03UscQxWNx4Ki4aRm5HWxTbYk8uduGSTi0SFTx8xiznr-rH9fso946U6C9P4uPckJexRtjiIN3r2l3azF0F39pO112ZYgebLOCfvDW9L3ZaFJ5kBRRoApFUJuiGTsWtmnSSJKoWaMY9boSDuAiWfEWdnI-sC51f0iN6hlj1Ssun1f86wf-bkPD6IMT~mANcpddQbJ8vgOpEu1FVtBuZiC1UbCAM6Q9a0edQnf0-g__',
  },
  {
    id: 5,
    url: 'https://s3-alpha-sig.figma.com/img/028d/53a1/110f07d207d28240dc0ab7fbeb7d4652?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sMxLam~oCr0Za7phr11LvrmFl-vddUAC3nl0X3QWZY19LOHcE8KnzLVOIAtR-vxWjWw15uL-Wi0rYnXfgyuWAEVQdxsgGnblJBQ5BL49MbgMTr03UscQxWNx4Ki4aRm5HWxTbYk8uduGSTi0SFTx8xiznr-rH9fso946U6C9P4uPckJexRtjiIN3r2l3azF0F39pO112ZYgebLOCfvDW9L3ZaFJ5kBRRoApFUJuiGTsWtmnSSJKoWaMY9boSDuAiWfEWdnI-sC51f0iN6hlj1Ssun1f86wf-bkPD6IMT~mANcpddQbJ8vgOpEu1FVtBuZiC1UbCAM6Q9a0edQnf0-g__',
  },
];
