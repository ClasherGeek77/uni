# ml_rock_paper_scissors

## what it is

one notebook (July 2020, final submission of an online beginner machine learning course) that trains a small convolutional neural network (CNN) to tell hand-gesture photos of rock, paper and scissors apart. markdown is in Indonesian.

stack: Python 3, TensorFlow / Keras, scikit-learn (for the split), matplotlib. the notebook was written for Google Colab.

what it does:

- downloads the dataset (2188 images, 3 classes), splits it 60% train / 40% validation (1312 and 876 images).
- augments the training images (rotation, flips, shear), resizes to 150x150.
- trains a Conv2D stack for 40 epochs with the Nadam optimizer.
- plots loss and accuracy, then lets you upload your own picture and prints the predicted class.

## when to use it

as a first look at image classification with Keras. it is a record of a finished exercise, and its data download is broken now (see below).

## what you need

- the easy way: Google Colab, https://colab.research.google.com/ , free, runs the notebook as is except for the dataset.
- locally: Python 3.9 or newer and TensorFlow (`pip install tensorflow`). expect it to be slow on CPU (the saved Colab run took about 29 s per epoch of 8 steps).

## quick start

1. open https://colab.research.google.com/ , `File`, `Upload notebook`, choose `Rock_Paper_Scissors_Classification.ipynb`.
2. fix the data cell. the notebook downloads `https://dicodingacademy.blob.core.windows.net/picodiploma/ml_pemula_academy/rockpaperscissors.zip`, which now returns 404 (checked). get the same dataset from Kaggle (search "Rock-Paper-Scissors Images", 2188 images, https://www.kaggle.com/), upload the zip to Colab, and point `local_zip` at it. the notebook expects the folders `rock`, `paper`, `scissors` under `/tmp/rockpaperscissors`; check that your zip unpacks to that layout (not verified).
3. `Runtime`, `Run all`.

you should see, after the generators are built, `Found 1312 images belonging to 3 classes.` and `Found 876 images belonging to 3 classes.`, then 40 epochs, ending around training accuracy 0.97 and validation accuracy 0.99 (saved output: `accuracy: 0.9766 - val_accuracy: 0.9883` at epoch 40), then two plots with loss and validation loss close to each other. the last cell asks you to upload an image and prints `rock`, `paper` or `scissors`. not re-run here.

## how to read the code

- the notebook's conclusion is "good fit" because training and validation curves stay close.
- `train_test_split` is applied to the file names of each class, then the files are copied into `train/` and `val/` folders, which is what `flow_from_directory` needs.
- `from google.colab import files` only works on Colab; to run locally, replace the upload cell with a path to an image.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `wget` 404 or `BadZipFile` | dead dataset URL | get the dataset elsewhere, see quick start |
| `ModuleNotFoundError: google.colab` | running outside Colab | use Colab, or remove that import and the upload cell |
| `ImportError` on `keras.preprocessing.image` or `tf.optimizers.Nadam` | newer TensorFlow moved these | use `tensorflow.keras.preprocessing.image` and `tf.keras.optimizers.Nadam` |
| very slow training | CPU only | use a Colab GPU runtime (`Runtime`, `Change runtime type`) |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni
