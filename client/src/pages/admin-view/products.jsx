import { ProductImageUpload } from '@/components/admin-view/image-upload';
import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { addProductFormElements } from '@/config'
import React, { Fragment, useState } from 'react'


const initialFormData = {
  image: null, title: "", description: "", category: "", brand: "", price: "", salesPrice: "", totalStock: "", averageReview: 0,
}




export const AdminProducts = () => {
  const [openCreateProductsDialog, setopenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  function onSubmit() {

  }

  return (
    <Fragment>
      <div className='mb-5 w-full flex justify-end'>
        <Button onClick={() => setopenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
        <Sheet open={openCreateProductsDialog} onOpenChange={() => {
          setopenCreateProductsDialog(false);
        }}>
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>
                Add New Product
              </SheetTitle>
            </SheetHeader>
            <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl} />
            <div className='py-6'>
              <CommonForm formControls={addProductFormElements} formData={formData} setFormData={setFormData} buttonText='Add' onSubmit={onSubmit} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </Fragment>

  )
}
